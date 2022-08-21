import { Migration } from '@mikro-orm/migrations';

export class Migration20220820173442 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "base_model" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "base_model_pkey" primary key ("id"));');

    this.addSql('create table "language" ("code" varchar(255) not null, "name" varchar(255) not null, "native" varchar(255) not null, "rtl" smallint not null, constraint "language_pkey" primary key ("code"));');
    this.addSql('alter table "language" add constraint "language_name_unique" unique ("name");');
    this.addSql('alter table "language" add constraint "language_native_unique" unique ("native");');

    this.addSql('create table "user" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" varchar(255) not null, "username" varchar(255) not null, constraint "user_pkey" primary key ("id"));');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');

    this.addSql('create table "cardpack" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "code" varchar(255) not null, "name" varchar(255) not null, "description" varchar(255) null, "nsfw" boolean not null, "user_id_id" uuid not null, constraint "cardpack_pkey" primary key ("id"));');
    this.addSql('alter table "cardpack" add constraint "cardpack_code_unique" unique ("code");');

    this.addSql('create table "cardpack_languages" ("cardpack_id" uuid not null, "language_code" varchar(255) not null, constraint "cardpack_languages_pkey" primary key ("cardpack_id", "language_code"));');

    this.addSql('create table "black_card" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "text" varchar(255) not null, "type" text check ("type" in (\'black\')) not null, "cardpack_id_id" uuid not null, constraint "black_card_pkey" primary key ("id"));');

    this.addSql('create table "white_card" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "text" varchar(255) not null, "type" text check ("type" in (\'white\')) not null, "cardpack_id_id" uuid not null, constraint "white_card_pkey" primary key ("id"));');

    this.addSql('alter table "cardpack" add constraint "cardpack_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "cardpack_languages" add constraint "cardpack_languages_cardpack_id_foreign" foreign key ("cardpack_id") references "cardpack" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "cardpack_languages" add constraint "cardpack_languages_language_code_foreign" foreign key ("language_code") references "language" ("code") on update cascade on delete cascade;');

    this.addSql('alter table "black_card" add constraint "black_card_cardpack_id_id_foreign" foreign key ("cardpack_id_id") references "cardpack" ("id") on update cascade;');

    this.addSql('alter table "white_card" add constraint "white_card_cardpack_id_id_foreign" foreign key ("cardpack_id_id") references "cardpack" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cardpack_languages" drop constraint "cardpack_languages_language_code_foreign";');

    this.addSql('alter table "cardpack" drop constraint "cardpack_user_id_id_foreign";');

    this.addSql('alter table "cardpack_languages" drop constraint "cardpack_languages_cardpack_id_foreign";');

    this.addSql('alter table "black_card" drop constraint "black_card_cardpack_id_id_foreign";');

    this.addSql('alter table "white_card" drop constraint "white_card_cardpack_id_id_foreign";');

    this.addSql('drop table if exists "base_model" cascade;');

    this.addSql('drop table if exists "language" cascade;');

    this.addSql('drop table if exists "user" cascade;');

    this.addSql('drop table if exists "cardpack" cascade;');

    this.addSql('drop table if exists "cardpack_languages" cascade;');

    this.addSql('drop table if exists "black_card" cascade;');

    this.addSql('drop table if exists "white_card" cascade;');
  }

}

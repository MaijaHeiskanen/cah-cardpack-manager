"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const nestjs_1 = require("@mikro-orm/nestjs");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cardpack_module_1 = require("./cardpack/cardpack.module");
const BaseCard_entity_1 = require("./entities/BaseCard.entity");
const BaseModel_entity_1 = require("./entities/BaseModel.entity");
const BlackCard_entity_1 = require("./entities/BlackCard.entity");
const Cardpack_entity_1 = require("./entities/Cardpack.entity");
const Language_entity_1 = require("./entities/Language.entity");
const User_entity_1 = require("./entities/User.entity");
const WhiteCard_entity_1 = require("./entities/WhiteCard.entity");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            cardpack_module_1.CardpackModule,
            nestjs_1.MikroOrmModule.forRoot({
                entities: [
                    BaseModel_entity_1.BaseModel,
                    BaseCard_entity_1.BaseCard,
                    User_entity_1.User,
                    Language_entity_1.Language,
                    WhiteCard_entity_1.WhiteCard,
                    BlackCard_entity_1.BlackCard,
                    Cardpack_entity_1.Cardpack,
                ],
                entitiesTs: ['src/entities'],
                dbName: 'cah-cardpack-manager',
                type: 'postgresql',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
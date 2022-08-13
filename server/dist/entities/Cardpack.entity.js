"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cardpack = void 0;
const openapi = require("@nestjs/swagger");
const core_1 = require("@mikro-orm/core");
const BaseModel_entity_1 = require("./BaseModel.entity");
const BlackCard_entity_1 = require("./BlackCard.entity");
const Language_entity_1 = require("./Language.entity");
const User_entity_1 = require("./User.entity");
const WhiteCard_entity_1 = require("./WhiteCard.entity");
let Cardpack = class Cardpack extends BaseModel_entity_1.BaseModel {
    constructor() {
        super(...arguments);
        this.blackCards = new core_1.Collection(this);
        this.whiteCards = new core_1.Collection(this);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: false, type: () => String }, nsfw: { required: true, type: () => Boolean }, languages: { required: true, type: () => [require("./Language.entity").Language] }, userId: { required: true, type: () => String }, blackCards: { required: true, type: () => Object, default: new core_1.Collection(this) }, whiteCards: { required: true, type: () => Object, default: new core_1.Collection(this) } };
    }
};
__decorate([
    (0, core_1.Property)({ unique: true }),
    __metadata("design:type", String)
], Cardpack.prototype, "code", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Cardpack.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Cardpack.prototype, "description", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Boolean)
], Cardpack.prototype, "nsfw", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => Language_entity_1.Language),
    __metadata("design:type", Array)
], Cardpack.prototype, "languages", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => User_entity_1.User, { mapToPk: true }),
    __metadata("design:type", String)
], Cardpack.prototype, "userId", void 0);
__decorate([
    (0, core_1.OneToMany)({
        mappedBy: 'cardpack',
        entity: () => BlackCard_entity_1.BlackCard,
    }),
    __metadata("design:type", Object)
], Cardpack.prototype, "blackCards", void 0);
__decorate([
    (0, core_1.OneToMany)({
        mappedBy: 'cardpack',
        entity: () => WhiteCard_entity_1.WhiteCard,
    }),
    __metadata("design:type", Object)
], Cardpack.prototype, "whiteCards", void 0);
Cardpack = __decorate([
    (0, core_1.Entity)()
], Cardpack);
exports.Cardpack = Cardpack;
//# sourceMappingURL=Cardpack.entity.js.map
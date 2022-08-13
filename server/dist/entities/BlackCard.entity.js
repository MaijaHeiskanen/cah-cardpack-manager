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
exports.BlackCard = void 0;
const openapi = require("@nestjs/swagger");
const core_1 = require("@mikro-orm/core");
const BaseCard_entity_1 = require("./BaseCard.entity");
const Cardpack_entity_1 = require("./Cardpack.entity");
let BlackCard = class BlackCard extends BaseCard_entity_1.BaseCard {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String, enum: require("./BaseCard.entity").CARD_TYPES.BLACK }, cardpack: { required: true, type: () => require("./Cardpack.entity").Cardpack } };
    }
};
__decorate([
    (0, core_1.Enum)({ items: [BaseCard_entity_1.CARD_TYPES.BLACK] }),
    __metadata("design:type", String)
], BlackCard.prototype, "type", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => Cardpack_entity_1.Cardpack }),
    __metadata("design:type", Cardpack_entity_1.Cardpack)
], BlackCard.prototype, "cardpack", void 0);
BlackCard = __decorate([
    (0, core_1.Entity)()
], BlackCard);
exports.BlackCard = BlackCard;
//# sourceMappingURL=BlackCard.entity.js.map
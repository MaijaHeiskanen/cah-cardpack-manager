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
exports.BaseCard = exports.CARD_TYPES = void 0;
const openapi = require("@nestjs/swagger");
const core_1 = require("@mikro-orm/core");
const BaseModel_entity_1 = require("./BaseModel.entity");
var CARD_TYPES;
(function (CARD_TYPES) {
    CARD_TYPES["WHITE"] = "white";
    CARD_TYPES["BLACK"] = "black";
})(CARD_TYPES = exports.CARD_TYPES || (exports.CARD_TYPES = {}));
let BaseCard = class BaseCard extends BaseModel_entity_1.BaseModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { text: { required: true, type: () => String }, type: { required: true, enum: require("./BaseCard.entity").CARD_TYPES } };
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], BaseCard.prototype, "text", void 0);
__decorate([
    (0, core_1.Enum)(() => CARD_TYPES),
    __metadata("design:type", String)
], BaseCard.prototype, "type", void 0);
BaseCard = __decorate([
    (0, core_1.Entity)()
], BaseCard);
exports.BaseCard = BaseCard;
//# sourceMappingURL=BaseCard.entity.js.map
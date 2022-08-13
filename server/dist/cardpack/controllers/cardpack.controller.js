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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardpackController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Language_entity_1 = require("../../entities/Language.entity");
const User_entity_1 = require("../../entities/User.entity");
const cardpack_service_1 = require("../services/cardpack.service");
let CardpackController = class CardpackController {
    constructor(cardpackService) {
        this.cardpackService = cardpackService;
    }
    getHello(user, lang) {
        return this.cardpackService.getHello() + user.username + lang;
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_entity_1.User, Language_entity_1.Language]),
    __metadata("design:returntype", String)
], CardpackController.prototype, "getHello", null);
CardpackController = __decorate([
    (0, common_1.Controller)('cardpack'),
    __metadata("design:paramtypes", [cardpack_service_1.CardpackService])
], CardpackController);
exports.CardpackController = CardpackController;
//# sourceMappingURL=cardpack.controller.js.map
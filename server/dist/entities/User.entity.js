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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const core_1 = require("@mikro-orm/core");
const BaseModel_entity_1 = require("./BaseModel.entity");
let User = class User extends BaseModel_entity_1.BaseModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, username: { required: true, type: () => String } };
    }
};
__decorate([
    (0, core_1.Property)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, core_1.Property)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
User = __decorate([
    (0, core_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=User.entity.js.map
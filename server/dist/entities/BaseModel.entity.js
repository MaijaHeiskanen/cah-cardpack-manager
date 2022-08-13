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
exports.BaseModel = void 0;
const openapi = require("@nestjs/swagger");
const core_1 = require("@mikro-orm/core");
let BaseModel = class BaseModel extends core_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date, default: new Date() }, updatedAt: { required: true, type: () => Date, default: new Date() } };
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], BaseModel.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    (0, core_1.Property)({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], BaseModel.prototype, "updatedAt", void 0);
BaseModel = __decorate([
    (0, core_1.Entity)()
], BaseModel);
exports.BaseModel = BaseModel;
//# sourceMappingURL=BaseModel.entity.js.map
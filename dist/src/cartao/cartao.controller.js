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
exports.CartaoController = void 0;
const common_1 = require("@nestjs/common");
const cartao_service_1 = require("./cartao.service");
const cartao_dto_1 = require("./dto/cartao.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CartaoController = class CartaoController {
    cartaoService;
    constructor(cartaoService) {
        this.cartaoService = cartaoService;
    }
    create(req, dto) {
        return this.cartaoService.create(req.user.userId, dto);
    }
    findAll(req) {
        return this.cartaoService.findAll(req.user.userId);
    }
    findOne(req, id) {
        return this.cartaoService.findOne(req.user.userId, id);
    }
    update(req, id, dto) {
        return this.cartaoService.update(req.user.userId, id, dto);
    }
    remove(req, id) {
        return this.cartaoService.remove(req.user.userId, id);
    }
};
exports.CartaoController = CartaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cartao_dto_1.CreateCartaoDto]),
    __metadata("design:returntype", void 0)
], CartaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CartaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, cartao_dto_1.UpdateCartaoDto]),
    __metadata("design:returntype", void 0)
], CartaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CartaoController.prototype, "remove", null);
exports.CartaoController = CartaoController = __decorate([
    (0, common_1.Controller)('cartoes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [cartao_service_1.CartaoService])
], CartaoController);
//# sourceMappingURL=cartao.controller.js.map
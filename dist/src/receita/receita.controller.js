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
exports.ReceitaController = void 0;
const common_1 = require("@nestjs/common");
const receita_service_1 = require("./receita.service");
const receita_dto_1 = require("./dto/receita.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ReceitaController = class ReceitaController {
    receitaService;
    constructor(receitaService) {
        this.receitaService = receitaService;
    }
    create(req, dto) {
        return this.receitaService.create(req.user.userId, dto);
    }
    findAll(req, mes) {
        if (mes) {
            return this.receitaService.findByMes(req.user.userId, mes);
        }
        return this.receitaService.findAll(req.user.userId);
    }
    getTotal(req, mes) {
        return this.receitaService.getTotalByMes(req.user.userId, mes);
    }
    findOne(req, id) {
        return this.receitaService.findOne(req.user.userId, id);
    }
    update(req, id, dto) {
        return this.receitaService.update(req.user.userId, id, dto);
    }
    remove(req, id) {
        return this.receitaService.remove(req.user.userId, id);
    }
};
exports.ReceitaController = ReceitaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receita_dto_1.CreateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('mes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('total'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('mes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "getTotal", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, receita_dto_1.UpdateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "remove", null);
exports.ReceitaController = ReceitaController = __decorate([
    (0, common_1.Controller)('receitas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [receita_service_1.ReceitaService])
], ReceitaController);
//# sourceMappingURL=receita.controller.js.map
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
exports.DespesaController = void 0;
const common_1 = require("@nestjs/common");
const despesa_service_1 = require("./despesa.service");
const despesa_dto_1 = require("./dto/despesa.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let DespesaController = class DespesaController {
    despesaService;
    constructor(despesaService) {
        this.despesaService = despesaService;
    }
    create(req, dto) {
        return this.despesaService.create(req.user.userId, dto);
    }
    findAll(req, mes) {
        if (mes) {
            return this.despesaService.findByMes(req.user.userId, mes);
        }
        return this.despesaService.findAll(req.user.userId);
    }
    getTotal(req, mes) {
        return this.despesaService.getTotalByMes(req.user.userId, mes);
    }
    findOne(req, id) {
        return this.despesaService.findOne(req.user.userId, id);
    }
    update(req, id, dto) {
        return this.despesaService.update(req.user.userId, id, dto);
    }
    remove(req, id) {
        return this.despesaService.remove(req.user.userId, id);
    }
};
exports.DespesaController = DespesaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, despesa_dto_1.CreateDespesaDto]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('mes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('total'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('mes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "getTotal", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, despesa_dto_1.UpdateDespesaDto]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DespesaController.prototype, "remove", null);
exports.DespesaController = DespesaController = __decorate([
    (0, common_1.Controller)('despesas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [despesa_service_1.DespesaService])
], DespesaController);
//# sourceMappingURL=despesa.controller.js.map
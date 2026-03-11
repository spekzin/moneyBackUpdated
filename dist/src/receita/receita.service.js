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
exports.ReceitaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReceitaService = class ReceitaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.receita.create({
            data: {
                ...dto,
                userId,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.receita.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findByMes(userId, mes) {
        return this.prisma.receita.findMany({
            where: { userId, mes },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(userId, id) {
        const receita = await this.prisma.receita.findFirst({
            where: { id, userId },
        });
        if (!receita) {
            throw new common_1.NotFoundException('Receita não encontrada');
        }
        return receita;
    }
    async update(userId, id, dto) {
        await this.findOne(userId, id);
        return this.prisma.receita.update({
            where: { id },
            data: dto,
        });
    }
    async remove(userId, id) {
        await this.findOne(userId, id);
        return this.prisma.receita.delete({
            where: { id },
        });
    }
    async getTotalByMes(userId, mes) {
        const result = await this.prisma.receita.aggregate({
            where: { userId, mes },
            _sum: { valor: true },
        });
        return { total: result._sum.valor || 0 };
    }
};
exports.ReceitaService = ReceitaService;
exports.ReceitaService = ReceitaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReceitaService);
//# sourceMappingURL=receita.service.js.map
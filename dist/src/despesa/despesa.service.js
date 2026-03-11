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
exports.DespesaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DespesaService = class DespesaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.despesa.create({
            data: {
                ...dto,
                userId,
            },
            include: {
                cartao: true,
                categoria: true,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.despesa.findMany({
            where: { userId },
            include: {
                cartao: true,
                categoria: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findByMes(userId, mes) {
        return this.prisma.despesa.findMany({
            where: {
                userId,
                OR: [{ mes }, { recorrente: true }],
            },
            include: {
                cartao: true,
                categoria: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(userId, id) {
        const despesa = await this.prisma.despesa.findFirst({
            where: { id, userId },
            include: {
                cartao: true,
                categoria: true,
            },
        });
        if (!despesa) {
            throw new common_1.NotFoundException('Despesa não encontrada');
        }
        return despesa;
    }
    async update(userId, id, dto) {
        await this.findOne(userId, id);
        return this.prisma.despesa.update({
            where: { id },
            data: dto,
            include: {
                cartao: true,
                categoria: true,
            },
        });
    }
    async remove(userId, id) {
        await this.findOne(userId, id);
        return this.prisma.despesa.delete({
            where: { id },
        });
    }
    async getTotalByMes(userId, mes) {
        const [avulsas, recorrentes] = await Promise.all([
            this.prisma.despesa.aggregate({
                where: { userId, mes, recorrente: false },
                _sum: { valor: true },
            }),
            this.prisma.despesa.aggregate({
                where: { userId, recorrente: true },
                _sum: { valor: true },
            }),
        ]);
        return {
            avulsas: avulsas._sum.valor || 0,
            recorrentes: recorrentes._sum.valor || 0,
            total: (avulsas._sum.valor || 0) + (recorrentes._sum.valor || 0),
        };
    }
};
exports.DespesaService = DespesaService;
exports.DespesaService = DespesaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DespesaService);
//# sourceMappingURL=despesa.service.js.map
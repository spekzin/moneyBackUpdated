"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaModule = void 0;
const common_1 = require("@nestjs/common");
const despesa_service_1 = require("./despesa.service");
const despesa_controller_1 = require("./despesa.controller");
let DespesaModule = class DespesaModule {
};
exports.DespesaModule = DespesaModule;
exports.DespesaModule = DespesaModule = __decorate([
    (0, common_1.Module)({
        controllers: [despesa_controller_1.DespesaController],
        providers: [despesa_service_1.DespesaService],
        exports: [despesa_service_1.DespesaService],
    })
], DespesaModule);
//# sourceMappingURL=despesa.module.js.map
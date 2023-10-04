"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ConsultaServices {
    constructor() { }
    listarConsulta() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.findMany();
                return consulta;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarConsulta(newConsulta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.create({
                    data: newConsulta,
                });
                return consulta;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarConsulta(id, data, id_paciente, id_secretaria, nome_dent, rg_secretaria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.update({
                    where: { id: id },
                    data: { id: id, data: data, id_paciente: id_paciente, id_secretaria: id_secretaria, nome_dent: nome_dent, rg_secretaria: rg_secretaria },
                });
                return consulta;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarConsulta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.delete({
                    where: { id: id }
                });
                return console.log("consulta deletada");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new ConsultaServices();

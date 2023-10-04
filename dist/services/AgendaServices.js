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
class AgendaServices {
    constructor() { }
    listarAgenda() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.findMany();
                return agenda;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarAgenda(newAgenda) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.create({
                    data: newAgenda,
                });
                return agenda;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarAgenda(id, data, nome_pcte) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.update({
                    where: { id: id },
                    data: { data: data, nomePcte: nome_pcte },
                });
                return agenda;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarAgenda(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.delete({
                    where: { id: id }
                });
                return console.log("Secretaria deletada");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new AgendaServices();

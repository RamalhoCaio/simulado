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
class PacienteServices {
    constructor() { }
    listarPaciente() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield prisma.paciente.findMany();
                return pacientes;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarPaciente(newPaciente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.create({
                    data: newPaciente,
                });
                return paciente;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarPaciente(id, nome, senha, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.update({
                    where: { id: id },
                    data: { id: id, nome: nome, senha: senha, usuario: usuario },
                });
                return paciente;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarPaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.delete({
                    where: { id: id },
                });
                return console.log('Paciente Deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new PacienteServices();

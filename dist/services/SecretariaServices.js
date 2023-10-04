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
class SecretariaServices {
    constructor() { }
    listarSecretaria() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.findMany();
                return secretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarSecretaria(newSecretaria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.create({
                    data: newSecretaria,
                });
                return secretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarSecretaria(Nome, RG) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.update({
                    where: { RG: RG },
                    data: { Nome: Nome, RG: RG },
                });
                return secretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarSecretaria(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.delete({
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
exports.default = new SecretariaServices();

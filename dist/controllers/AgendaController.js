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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AgendaServices_1 = __importDefault(require("../services/AgendaServices"));
class AgendaController {
    constructor() { }
    listarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const agenda = yield AgendaServices_1.default.listarAgenda();
            return res.status(200).json({
                status: 'ok',
                agenda: agenda,
            });
        });
    }
    atualizarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Agenda');
        });
    }
    criarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAgenda = req.body;
            const result = yield AgendaServices_1.default.criarAgenda(newAgenda);
            if (result) {
                res.status(200).json({
                    status: 'tudo ok',
                    consulta: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Deletar Agenda');
        });
    }
}
exports.default = new AgendaController();

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
const ConsultaServices_1 = __importDefault(require("../services/ConsultaServices"));
class ConsultaController {
    constructor() { }
    listarConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield ConsultaServices_1.default.listarConsulta();
            return res.status(200).json({
                status: 'ok',
                consultas: consulta,
            });
        });
    }
    atualizarConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Consulta');
        });
    }
    criarConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newConsulta = req.body;
            const result = yield ConsultaServices_1.default.criarConsulta(newConsulta);
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
    deletarConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Deletar Consulta');
        });
    }
}
exports.default = new ConsultaController();

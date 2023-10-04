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
const PacienteServices_1 = __importDefault(require("../services/PacienteServices"));
class PacienteController {
    constructor() { }
    listarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacientes = yield PacienteServices_1.default.listarPaciente();
            return res.status(200).json({
                status: 'ok',
                pacientes: pacientes,
            });
        });
    }
    atualizarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Paciente');
        });
    }
    criarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPaciente = req.body;
            const result = yield PacienteServices_1.default.criarPaciente(newPaciente);
            if (result) {
                res.status(200).json({
                    status: 'tudo ok',
                    paciente: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Deletar Paciente');
        });
    }
}
exports.default = new PacienteController();

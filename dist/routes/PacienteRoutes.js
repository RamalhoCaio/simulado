"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacienteController_1 = __importDefault(require("../controllers/PacienteController"));
const PacienteRouter = (0, express_1.Router)();
PacienteRouter.get('/pacientes', PacienteController_1.default.listarPaciente);
PacienteRouter.get('/paciente/:id', PacienteController_1.default.listarPaciente);
PacienteRouter.post('/paciente', PacienteController_1.default.criarPaciente);
PacienteRouter.patch('/paciente/:id', PacienteController_1.default.atualizarPaciente);
PacienteRouter.delete('/paciente/:id', PacienteController_1.default.deletarPaciente);
exports.default = PacienteRouter;

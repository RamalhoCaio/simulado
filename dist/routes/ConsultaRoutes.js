"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultaControllers_1 = __importDefault(require("../controllers/ConsultaControllers"));
const ConsultaRouter = (0, express_1.Router)();
ConsultaRouter.get('/Consultas', ConsultaControllers_1.default.listarConsulta);
ConsultaRouter.get('/Consulta/:id', ConsultaControllers_1.default.listarConsulta);
ConsultaRouter.post('/Consulta', ConsultaControllers_1.default.criarConsulta);
ConsultaRouter.patch('/Consulta/:id', ConsultaControllers_1.default.atualizarConsulta);
ConsultaRouter.delete('/Consulta/:id', ConsultaControllers_1.default.deletarConsulta);
exports.default = ConsultaRouter;

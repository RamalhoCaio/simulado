"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AgendaController_1 = __importDefault(require("../controllers/AgendaController"));
const AgendaRouter = (0, express_1.Router)();
AgendaRouter.get('/Agendas', AgendaController_1.default.listarAgenda);
AgendaRouter.get('/Agenda/:id', AgendaController_1.default.listarAgenda);
AgendaRouter.post('/Agendas', AgendaController_1.default.criarAgenda);
AgendaRouter.patch('/Agendas/:id', AgendaController_1.default.atualizarAgenda);
AgendaRouter.delete('/Agendas/:id', AgendaController_1.default.deletarAgenda);
exports.default = AgendaRouter;

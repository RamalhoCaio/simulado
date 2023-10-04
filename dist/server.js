"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const PacienteRoutes_1 = __importDefault(require("./routes/PacienteRoutes"));
const SecretariaRoutes_1 = __importDefault(require("./routes/SecretariaRoutes"));
const ConsultaRoutes_1 = __importDefault(require("./routes/ConsultaRoutes"));
const AgendaRoutes_1 = __importDefault(require("./routes/AgendaRoutes"));
dotenv_1.default.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', PacienteRoutes_1.default);
app.use('/api', SecretariaRoutes_1.default);
app.use('/api', ConsultaRoutes_1.default);
app.use('/api', AgendaRoutes_1.default);
if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}
else {
    console.log('Fail to load environment');
}

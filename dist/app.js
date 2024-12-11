"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const config_1 = __importDefault(require("./app/config"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// cors
app.use((0, cors_1.default)({
    origin: [
        `${config_1.default.client.live_url}`,
        `${config_1.default.client.build_url}`,
        `${config_1.default.client.local_url}`,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
// application routes
app.use('/api/v1', routes_1.default);
// check server
app.get('/', (req, res) => {
    res.send('Server is running!');
});
// error handler middleware
app.use(globalErrorHandler_1.default);
// Not Found
app.use(notFound_1.default);
exports.default = app;

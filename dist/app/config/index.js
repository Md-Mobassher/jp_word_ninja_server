"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    database_url_local: process.env.DATABASE_URL_LOCAL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    default_password: process.env.DEFAULT_PASS,
    super_admin: {
        email: process.env.SUPER_ADMIN_EMAIL,
        password: process.env.SUPER_ADMIN_PASS,
    },
    jwt: {
        access_secret: process.env.JWT_ACCESS_SECRET,
        refresh_secret: process.env.JWT_REFRESH_SECRET,
        access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
        refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    },
    client: {
        live_url: process.env.CLIENT_LIVE_URL,
        build_url: process.env.CLIENT_BUILD_URL,
        local_url: process.env.CLIENT_lOCAL_URL,
    },
    reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
};

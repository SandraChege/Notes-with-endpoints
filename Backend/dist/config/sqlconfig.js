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
exports.sqlConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mssql_1 = __importDefault(require("mssql"));
dotenv_1.default.config();
exports.sqlConfig = {
    user: "sa" || process.env.DB_USER,
    password: "Bagel@001" || process.env.DB_PWD,
    database: "noteTakingApp" || process.env.DB_NAME,
    server: "localhost",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};
function testDBConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = yield mssql_1.default.connect(exports.sqlConfig);
        if (pool.connected) {
            console.log("connection successful");
        }
    });
}
testDBConnection();

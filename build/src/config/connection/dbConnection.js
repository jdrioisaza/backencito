"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsPG_1 = require("./optionsPG");
dotenv_1.default.config({ path: "variables.env" });
const host = String(process.env.HOST);
const port = Number(process.env.PORT);
const database = String(process.env.DATABASE);
const userDB = String(process.env.USER_DB);
const password = String(process.env.PASSWORD);
const pgp = (0, pg_promise_1.default)(optionsPG_1.optionsPG);
const pool = pgp({
    user: userDB,
    host: host,
    database: database,
    password: password,
    port: port,
});
pool
    .connect()
    .then((con) => {
    console.log("conectado a la bd:", database);
    con.done();
})
    .catch((error) => {
    console.log(error);
});
exports.default = pool;

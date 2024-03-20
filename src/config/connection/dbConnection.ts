import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG";

dotenv.config({ path: "variables.env" });

const host = String(process.env.HOST);
const port = Number(process.env.PORT);
const database = String(process.env.DATABASE);
const userDB = String(process.env.USER_DB);
const password = String(process.env.PASSWORD)
const pgp = pgPromise(optionsPG);
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

export default pool;

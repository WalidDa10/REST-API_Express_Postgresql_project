import { Pool } from "pg";

import dotenv from "dotenv";


dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    password: process.env.PASSWORD
});
// or use on function 
pool.once('connect', ()=>{
    console.log('Connection pool establised  with DB');
}  )

export default pool;
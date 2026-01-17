import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host:process.env.HOSTNAME,
  user:process.env.USERNAME,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
  port:process.env.POSTGRES_PORT,
})

pool.connect((err)=>{
  if(err){
    console.log("DATABASE_CONNECTION_ERROR:",err);
  }else{
    console.log("Database connnected sucessfully!");
  }
})

export default pool;
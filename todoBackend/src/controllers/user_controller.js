import pool from "../config/db.js";
import bcrypt from "bcrypt";
export const signupUser = async (req,res)=>{
const {email,password,confirmPassword} = req.body;

const hashedPassword = await bcrypt.hash(password,10);

if(password !== confirmPassword){
  return res.status(400).json({message:"password not matched"});
}

const sql = "INSERT INTO users(email,password) VALUES($1,$2);";
try {
  await pool.query(sql,[email,hashedPassword]);
  return res.status(200).json({message:"data inserted sucessfully"});
} catch (error) {
  console.log("DATABASE_ERROR:",error);
  return res.status(500).json({message:"problem in insertion"});
}
}
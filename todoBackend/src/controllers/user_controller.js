import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const loginUser=async(req,res)=>{
  const {email,password} = req.body;

  const sql = "SELECT * FROM users WHERE email=$1;";
  try {
    const result = await pool.query(sql,[email]);
    if(result.rows.length === 0){
      return res.status(404).json({message:"user not found"});
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"password not matched"});
    }

    const token=jwt.sign({email:user.email},process.env.JWT_SECRET_KEY);

    return res.status(200).json({message:"login successful",token});
  } catch (error) {
    console.log("DATABASE_ERROR:",error);
    return res.status(500).json({message:"problem in login"});
  }
}
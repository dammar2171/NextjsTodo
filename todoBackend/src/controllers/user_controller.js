import pool from "../config/db";

export const signupUser = async (req,res)=>{
const {email,password} = req.body;

const sql = "INSERT INTO user(email,password) VALUES($1,$2);";
try {
  await pool.query(sql,[email,password]);
  return res.status(200).json({message:"data inserted sucessfully"});
} catch (error) {
  console.log("DATABASE_ERROR:",error);
  return res.status(500).json({message:"problem in insertion"});
}
}
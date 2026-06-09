import pool from "../config/db.js";

export const insertExpense = async(req,res)=>{
 const {description,amount,date}= req.body;
 const userID = req.user.userId;
 
 const sql = "INSERT INTO expenses(description,amount,date,user_id) VALUES($1,$2,$3,$4);";

 try {
  await pool.query(sql,[description,amount,date,userID]);
  return res.status(200).json({message:"Expense added successfully!"})
 } catch (error) {
  console.log("DATABASE_ERROR:",error);
  res.status(500).json({message:"Problem in insertion!"})
 }
}

export const fetchExpense = async (req,res) =>{
  const userID = req.user.userId;
  const sql = "SELECT * FROM expenses WHERE user_id = $1 ;";
  try {
    const results = await pool.query(sql,[userID]);
    if(results.rows.length === 0){
      res.status(404).json({message:"No expense found!"})
    }
    return res.status(200).json({data:results.rows,message:"expense fetched sucessfully!"})
  } catch (error) {
    console.log("DATABASE_ERROR: ",error);
    res.status(500).json({message:"Problem in fetching!"})
  }

}
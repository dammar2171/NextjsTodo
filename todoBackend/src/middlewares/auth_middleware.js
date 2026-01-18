import jwt from "jsonwebtoken";
const authMiddleware =(req,res,next)=>{
  const AuthHeader = req.headers.authorization;

  if(!AuthHeader){
    return res.status(401).json({message:"Token not found"});
  }
  const {token}=AuthHeader.split("")[0];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({message:"Invalid token"});
  }
}

export default authMiddleware;
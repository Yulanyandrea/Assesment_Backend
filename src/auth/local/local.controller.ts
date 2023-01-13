import { Request, Response, NextFunction } from 'express';
import  { getUser } from '../../api/users/user.services';
import { signToken } from '../auth.services';


export async function handleLoginUser(req:Request,res:Response,next:NextFunction) {
  const { email, password }=req.body;
  try {
    const user=await getUser({email})
    if(!user){
      return res.status(404).json({message:"Invalid email or password"})
    }
    const validatePassword= await user.comparePassword(password)

    if(!validatePassword){
      return res.status(401).json({message: "Invalid email or password"})
    }

    const payload=user.profile

    //token
   const token= signToken(payload);

    return res.status(200).json({profile:user.profile, token})

  } catch (error:any) {
    return res.status(500).json(error.message)

  }
}

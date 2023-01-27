import jwt, { decode } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUser } from '../api/users/user.services';
import { UserDocument } from '../api/users/user.model';
import { AuthTypes, roles } from './auth.types';



//sign token
const key=process.env.SECRET_TOKEN_APP as string

export function signToken(payload:any){
  const token= jwt.sign(payload,
    key,
    {expiresIn:'10h'},
    )
    return token;
}

//verify token
export function verifyToken(token:string): UserDocument | boolean {
  try {
    const decoded=jwt.verify(token,key) as UserDocument
    return decoded

  } catch (error) {
    return false
  }

}

// authenticated

export async function Authenticated(req:AuthTypes,res:Response,next:NextFunction){
  const token =req.headers?.authorization?.split(' ')[1];
  if(!token){
    return res.status(404).json({message:'Unauthorized'})
  }

  const decode=verifyToken(token) as UserDocument
    if(!decode){
      return res.status(401).json({message:'Unauthorize'})
    }

    const user= await getUser({ email: decode.email })


    if(!user){
      return res.status(401).json({message:'Unauthorized'})
    }

    req.user=user;

    next();
    return true
}

// export async function deletePermission(req:AuthTypes,res:Response,next:NextFunction) {
//   const token =req.headers?.authorization?.split(' ')[1];
//   const decode=verifyToken(token) as UserDocument
//   const user= await getUser({ id: decode._id })
//   // const list = await getFavById()
//   console.log("hola",user)
// }

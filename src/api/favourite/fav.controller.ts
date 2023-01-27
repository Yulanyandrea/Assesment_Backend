import { Request,Response, NextFunction } from "express";
import { createFav,
  getAllFav,
  getFav,
  getFavById,
  deleteFav,
  updateFav  } from './fav.services';
import { verifyToken } from '../../auth/auth.services';
import { getUser } from '../users/user.services';
import { UserDocument } from '../../api/users/user.model';
import { AuthTypes } from '../../auth/auth.types';
import Fav from './fav.model';

export async function handleGetAllListFav(req:Request,res:Response,next:NextFunction) {
  try {
    const fav = await getAllFav();
    return res.status(200).json(fav)
  } catch (error:any) {
    return res.status(500).json(error.message)

  }
}

export async function handleGetFavById(req:Request,res:Response,next:NextFunction) {
  const { id }=req.params;
  const favList=await getFavById(id);
  if(!favList){
    return res.status(404).json({message:'favourite list not found'})
  }

  return res.status(200).json(favList);

}

export async function handleCreateFavList(req:Request,res:Response,next:NextFunction) {
  const data=req.body;
  try {
    const fav= await createFav(data)
    return res.status(201).json(fav)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function handleDeleteFavList(req:AuthTypes,res:Response,next:NextFunction) {
  const { id }=req.params;
  const user= req.user

  const query = {_id:id , createdBy:user._id}



  try {

    const fav= await Fav.findOneAndDelete(query)
    if(!fav){
      return res.status(401).json({message:'you are not allow'})
    }
    return res.status(200).json({message: 'Favourite list deleted'})

  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function handleUpdateFavList(req:Request,res:Response,next:NextFunction) {
  const { id } = req.params;

  try {
    const token =req.headers?.authorization?.split(' ')[1] as string
    const decode= verifyToken(token) as UserDocument
    const user= await getUser({ email: decode.email })
    const user1 = user._id;
    const data = req.body;
    const userObject = user1.toString();


    if(data.createdBy=== userObject){
      const favList = await updateFav(id,data);
      if(!favList){
        return res.status(404).json({message:'favourite list not found'})
      }
      return res.status(200).json(favList);
    }
    return res.status(401).json({message: 'You are not allow to update this list'})

  } catch (error) {
    return res.status(500).json(error)

  }


}

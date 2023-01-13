import { Request,Response, NextFunction } from "express";
import { createFav,
  getAllFav,
  getFav,
  getFavById,
  deleteFav,
  updateFav  } from './fav.services';

export async function handleGetAllListFav(req:Request,res:Response,next:NextFunction) {
  try {
    const fav = await getAllFav();
    return res.status(200).json(fav)
  } catch (error) {
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

export async function handleDeleteFavList(req:Request,res:Response,next:NextFunction) {
  const { id }=req.params;
  try {
    const fav= await deleteFav(id)
    if(!fav){
      return res.status(404).json({message:'List not found'})
    }
    return res.status(200).json({message: 'Favourite list deleted'})
  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function handleUpdateFavList(req:Request,res:Response,next:NextFunction) {
  const { id }=req.params;
  const data = req.body;
  const favList=await updateFav(id,data);
  if(!favList){
    return res.status(404).json({message:'favourite list not found'})
  }
  return res.status(200).json(favList);
}

import Fav, { FavDocument } from './fav.model';
import { DocumentDefinition, FilterQuery } from "mongoose";

export function getAllFav(){
  return Fav.find();
}

export function getFav(filter:FilterQuery<FavDocument>){
  const favourite=Fav.findOne(filter);
  return favourite
}

export function createFav(fav:DocumentDefinition<Omit<FavDocument,'createdAt'| 'updateAt'>>){
  return Fav.create(fav);
}

export function getFavById(id:string){
  const fav= Fav.findById(id).populate({ path: 'createdBy', select: ' name ' })
  return fav ;

}

export function deleteFav(id:string){
  return Fav.findByIdAndRemove(id)
}

export function updateFav(id:string,fav:DocumentDefinition<Omit<FavDocument,'createdAt'| 'updatedAt'>>){
  return Fav.findByIdAndUpdate(id,fav,{new:true})
}

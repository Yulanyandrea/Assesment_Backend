import User, { UserDocument } from './user.model';
import { DocumentDefinition, FilterQuery } from "mongoose";


export function getAllUsers(){
  return User.find({},{password:0})
}

export function createUser(user:DocumentDefinition<Omit<UserDocument,'createdAt'| 'updateAt'>>){
  return User.create(user);
}

export function getUser(filter:FilterQuery<UserDocument>){
  const user= User.findOne(filter).populate({ path: 'list', select: ' title ' })
  return user;

}

export function getUserById(id:string){
  const user = User.findById(id);
  return user;
}

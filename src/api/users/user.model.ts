import {Schema,model, Document} from 'mongoose';
import bcrypt from 'bcrypt';
import { userData } from './user.type';

export interface UserDocument extends Document{
    name:string;
    email:string;
    password:string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    createdAt: Date;
    updateAt:Date;

  profile:userData;
  comparePassword:(password:string)=>Promise<boolean>;

}

const UserSchema= new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true,
    min:6,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps:true,
  versionKey:false
})

UserSchema.virtual('profile').get(function userData(){
  const { name , email, password}=this
  return { name, email, password}
})

  //middleware
  UserSchema.pre('save',async function save(next: Function){
    const user = this as unknown  as UserDocument;
    try {
      if(!user.isModified('password')){
        return next()
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;

    } catch (error:any) {
      next(error);
    }
  })



  //methods
  UserSchema.methods.comparePassword = async function comparePassword(this: UserDocument,candidatePassword:string, next:Function) {
    const user = this ;
   try {
    const isMatch = await bcrypt.compare(candidatePassword,user.password);
    return isMatch;
   } catch (error:any) {
    next(error)
    return false;

   }

  }

  const User=model<UserDocument>('User',UserSchema);
  export default User;


import {Schema,model, Document} from 'mongoose';

export interface FavDocument extends Document{
  name:string;
  title:string;
  description:string;
  link:string;
  createdBy: string;

  createdAt: Date;
  updatedAt: Date;
}

const FavSchema= new Schema({
  name:{
    type:String,
    unique:true,
    require:true
  },
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  link:{
    type:String,
    require:true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require:true,
  },

},{
  timestamps:true,
  versionKey:false
})

const Fav= model<FavDocument>('Fav',FavSchema)
export default Fav;

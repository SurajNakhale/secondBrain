import mongoose from "mongoose"
import {model, Schema} from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId;


// iser Schema
const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

export const User =  model("User", UserSchema);


//content sechma
const contentTypes = ['Images', 'video', 'article', 'audio', 'tweet', 'post'];
const ContentSechema = new Schema({
    link: {type: String, required: true},
    title: {type: String, required: true},
    type: {type: String, enum: contentTypes, required: true},
    tags: [{type: ObjectId,  ref: 'Tag'}],
    userId: {type: ObjectId, ref: "User", reauired: true}

})

export const Content = model("Content", ContentSechema);


//tags Schema
const tagSchema = new Schema({
    title: {type: String, required: true, unique: true}
})

export const Tag = model("Tag", tagSchema);


// link Schema
const linkSchema = new Schema({
    hash: {type: String, required: true},
    userId: {type: ObjectId, ref: 'User' , required: true}
})

export const Link = model("Link", linkSchema);



//populating relationship
 
async () => {
     await Content.find().populate({
    path: "userId",
    select: "username password"
})
} 
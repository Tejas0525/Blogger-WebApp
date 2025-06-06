import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique:true},
    password :{type:String, required: true}
});

const User = mongoose.model("User", UserSchema);

export default User;
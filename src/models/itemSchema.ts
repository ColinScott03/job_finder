import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    username: {
        tupe: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
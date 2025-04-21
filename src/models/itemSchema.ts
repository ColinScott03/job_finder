import mongoose, { Schema, Document, Model } from "mongoose";

interface Job {
    title: string;
    company: string;
}

interface IUser extends Document {
    username: string;
    password: string;
    savedJobs: Job[];
    name: string;
    interests: string;
    location: string;
    industry: string;
    jobType: string;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    savedJobs: [
        {
            title: String,
            company: String
        }
    ],
    name: {
        type: String,
    },
    interests: {
        type: String,
    },
    location: {
        type: String,
    },
    industry: {
        type: String,
    },
    jobType: {
        type: String,
    },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
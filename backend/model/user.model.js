import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }
}, {timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;
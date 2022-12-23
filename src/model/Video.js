import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        category: {type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true},
        description: {type: String, required: true},
        url: {type: String, require: true}
    }
)

const Video = mongoose.model("videos", videoSchema);

export default Video;
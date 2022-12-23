import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        color: { type: String, required: true },
    }
)

const Category = mongoose.model("categories", categorySchema);

export default Category;
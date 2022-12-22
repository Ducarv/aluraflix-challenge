import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: { type: Number },
        title: { type: String, required: true },
        color: { type: String, required: true },
    }
)

const Category = mongoose.model("Category", categorySchema);

export default Category;
import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      avatarSource: { type: String },
    },
    neededItems: { type: Array, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;

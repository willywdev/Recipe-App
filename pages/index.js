import RecipePreview from "@/components/RecipePreview/RecipePreview";
import Divider from "@/primitives/Divider";

export default function HomePage({ recipes }) {
  return (
    <>
      <RecipePreview recipes={recipes} />
      <Divider />
    </>
  );
}

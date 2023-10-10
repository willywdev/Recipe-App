import Hero from "@/components/Hero/Hero";
import RecipePreview from "@/components/RecipePreview/RecipePreview";
import Divider from "@/primitives/Divider";

export default function HomePage({ recipes }) {
  return (
    <>
      <Hero />
      <Divider />
      <RecipePreview recipes={recipes} />
      <Divider />
    </>
  );
}

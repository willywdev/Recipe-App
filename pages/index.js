import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import RecipePreview from "@/components/RecipePreview/RecipePreview";
import Divider from "@/primitives/Divider";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <RecipePreview />
      <Divider />
    </>
  );
}

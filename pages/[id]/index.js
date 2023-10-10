import Spinner from "@/primitives/Spinner";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function RecipeDetails({ fetcher }) {
  const id = useRouter().query.id;
  const { data: recipe, isLoading, error } = useSWR(`/api/${id}`, fetcher);
  console.log(recipe);

  if (isLoading || error) {
    return <Spinner />;
  }

  return <h1>Hello!</h1>;
}

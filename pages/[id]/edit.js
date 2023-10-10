import Form from "@/components/Form/Form";
import BigCard from "@/primitives/BigCard";
import { useRouter } from "next/router";

export default function EditPage({ recipes }) {
  const id = useRouter().query.id;
  const recipe = recipes.find((recipe) => recipe._id === id);

  return (
    <BigCard>
      <h2>Edit Recipe</h2>
      <Form recipe={recipe} isEdit={true} />
    </BigCard>
  );
}

import ActionButton from "@/primitives/ActionButton";
import Card from "@/primitives/Card";
import styled from "styled-components";

export default function RecipePreview({ recipes }) {
  return (
    <>
      <StyledMain>
        {recipes.map((recipe) => (
          <Card
            key={recipe.title}
            imgSource={recipe.image}
            title={recipe.title}
            author={recipe.author.name}
            description={recipe.description}
            neededItems={recipe.neededItems}
            id={recipe._id}
          />
        ))}
      </StyledMain>
      <FlexDiv>
        <ActionButton href="/recipes">See all Recipes</ActionButton>
      </FlexDiv>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  gap: 1rem;
`;

const FlexDiv = styled.div`
  display: block;
  margin: 2.5rem auto;
`;

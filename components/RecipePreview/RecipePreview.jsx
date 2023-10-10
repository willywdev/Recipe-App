import ActionButton from "@/primitives/ActionButton";
import Card from "@/primitives/Card";
import styled from "styled-components";

export default function RecipePreview() {
  return (
    <>
      <StyledMain>
        <Card />
        <Card />
        <Card />
      </StyledMain>
      <FlexDiv>
        <ActionButton href="/">See all Recipes</ActionButton>
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

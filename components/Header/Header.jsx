import InternalLink from "@/primitives/InternalLink";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <InternalLink href="/">All Recipes</InternalLink>
      <h1>Hodor Recipes</h1>
      <InternalLink href="/">Dashboard</InternalLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  user-select: none;

  & h1 {
    color: #131313;
  }
`;

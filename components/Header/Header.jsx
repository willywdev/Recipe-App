import InternalLink from "@/primitives/InternalLink";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <InternalLink href="/recipes">All Recipes</InternalLink>
      <StyledLink href="/">
        <h1>Hodor Recipes</h1>
      </StyledLink>
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

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

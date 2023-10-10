import Link from "next/link";
import styled from "styled-components";

export default function ActionButton({ href, children }) {
  return <StyledButton href={href}>{children}</StyledButton>;
}

const StyledButton = styled(Link)`
  padding: 1rem;
  background: #00cc99;
  text-decoration: none;
  color: #1c1c1c;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  width: max-content;

  &:hover {
    color: #ececec;
  }
  &:active {
    transform: scale(0.95);
  }
`;

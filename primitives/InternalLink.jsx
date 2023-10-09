import Link from "next/link";
import styled from "styled-components";

export default function InternalLink({ href, children }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background: #1c1c1c;
  padding: 8px;
  border-radius: 8px;
  font-size: 1.05rem;
  &:active {
    transform: scale(0.95);
  }
`;

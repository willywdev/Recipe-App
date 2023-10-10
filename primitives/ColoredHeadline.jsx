import styled from "styled-components";

export default function ColoredHeadline({ children }) {
  return <StyledCardHeadline>{children}</StyledCardHeadline>;
}

const StyledCardHeadline = styled.h2`
  color: #00cc99;
`;

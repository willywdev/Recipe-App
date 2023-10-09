import Link from "next/link";
import styled from "styled-components";

export default function Hero() {
  return (
    <StyledMain>
      <LandingText>
        Best Recipes created by our <Highlight>community</Highlight>
      </LandingText>
      <ActionButton href="/">Create your own!</ActionButton>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5rem;
`;

const LandingText = styled.h2`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #1c1c1c;
  background: #00cc99;
`;

const ActionButton = styled(Link)`
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

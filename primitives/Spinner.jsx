import Lottie from "react-lottie-player";
import styled from "styled-components";
import lottieJson from "./assets/animation.json";

export default function Spinner() {
  return (
    <FlexDiv>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </FlexDiv>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

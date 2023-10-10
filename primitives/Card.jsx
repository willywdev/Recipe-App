import Image from "next/image";
import styled from "styled-components";

export default function Card({ imgSource, title, description, author }) {
  return (
    <StyledCard>
      <StyledImage src={imgSource} width={250} height={150} alt={title} />
      <TextDiv>
        <h2>{title}</h2>
        <p>{description}</p>
        <br />
        <p>{author}</p>
      </TextDiv>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  min-height: 400px;
  width: 300px;
  background: #ffffff50;
  border-radius: 15px;
  outline: 2px solid #00cc99;
`;

const StyledImage = styled(Image)`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const TextDiv = styled.div`
  margin: 0.5rem;
`;

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ColoredHeadline from "./ColoredHeadline";
import NeededItems from "./NeededItems";

export default function Card({
  imgSource,
  title,
  description,
  author,
  neededItems,
  id,
}) {
  return (
    <StyledCardLink href={`/${id}`}>
      <StyledCard>
        <StyledImage src={imgSource} width={300} height={200} alt={title} />
        <TextDiv>
          <ColoredHeadline>{title}</ColoredHeadline>
          <StyledCardDescription>{description}</StyledCardDescription>
          <br />
          <NeededItems items={neededItems} />
          <StyledAuthorName>
            ~ from <strong>{author}</strong>
          </StyledAuthorName>
        </TextDiv>
      </StyledCard>
    </StyledCardLink>
  );
}

const StyledCard = styled.article`
  height: 405px;
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

const StyledCardDescription = styled.p`
  margin-top: 5px;
  overflow: hidden;
  line-height: 1.2rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
`;

const StyledAuthorName = styled.p`
  text-align: end;
`;

const StyledCardLink = styled(Link)`
  all: unset;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

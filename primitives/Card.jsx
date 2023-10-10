import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Card({
  imgSource,
  title,
  description,
  author,
  neededItems,
  id,
}) {
  console.log(id);
  return (
    <StyledCardLink href={`/${id}`}>
      <StyledCard>
        <StyledImage src={imgSource} width={300} height={200} alt={title} />
        <TextDiv>
          <StyledCardHeadline>{title}</StyledCardHeadline>
          <StyledCardDescription>{description}</StyledCardDescription>
          <br />
          <StyledList>
            {neededItems.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </StyledList>
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

const StyledCardHeadline = styled.h2`
  color: #00cc99;
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

const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 0.9rem;
  list-style-type: none;
  margin-bottom: 10px;
`;

const StyledItem = styled.li`
  background-color: #1c1c1c;
  border-radius: 0 10px 10px 10px;
  padding: 3px;
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

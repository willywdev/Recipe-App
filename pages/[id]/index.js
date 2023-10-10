import BigCard from "@/primitives/BigCard";
import InternalLink from "@/primitives/InternalLink";
import NeededItems from "@/primitives/NeededItems";
import Spinner from "@/primitives/Spinner";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function RecipeDetails({ fetcher }) {
  const id = useRouter().query.id;
  const { data: recipe, isLoading, error } = useSWR(`/api/${id}`, fetcher);

  if (isLoading || error) {
    return <Spinner />;
  }

  const { author, description, image, neededItems, title } = recipe;

  return (
    <BigCard>
      <HeadlineDiv>
        <h2>{title}</h2>
        <FlexDiv>
          by
          <Avatar src={author.avatarSource} alt={author.name} />
          <h3>{author.name}</h3>
        </FlexDiv>
      </HeadlineDiv>
      <DetailsImage src={image} alt={title} height={250} width={500} />
      <NeededItems items={neededItems} />
      <h3>Recipe:</h3>
      <p>{description}</p>
      <InternalLink href={`${id}/edit`}>Edit</InternalLink>
      <InternalLink href="./edit">Delete</InternalLink>
    </BigCard>
  );
}

const DetailsImage = styled(Image)`
  outline: 1px solid black;
  margin: 0 auto;
`;
const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  height: auto;
  outline: 1px solid black;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 1rem;
`;

const HeadlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

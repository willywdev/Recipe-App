import styled from "styled-components";

export default function NeededItems({ items }) {
  return (
    <StyledList>
      {items.map((item) => (
        <StyledItem key={item}>{item}</StyledItem>
      ))}
    </StyledList>
  );
}

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

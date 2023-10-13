import styled from "styled-components";

export default function Form({ recipe, isEdit, onSubmit }) {
  const { author, description, title, image, neededItems } = recipe;
  const neededItemsString = neededItems.join(", ");

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <FormWrapper>
          <StyledLabel htmlFor="title">Title:</StyledLabel>
          <StyledInput
            type="text"
            name="title"
            id="title"
            defaultValue={isEdit && title}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledLabel htmlFor="description">Recipe:</StyledLabel>
          <StyledTextarea
            type="text"
            name="description"
            id="description"
            defaultValue={isEdit && description}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledLabel htmlFor="neededItems">
            Ingredients: (seperate by Comma)
          </StyledLabel>
          <StyledInput
            type="text"
            name="neededItems"
            id="neededItems"
            defaultValue={isEdit && neededItemsString}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledLabel htmlFor="image">Recipe Image:</StyledLabel>
          <StyledInput
            type="text"
            name="image"
            id="image"
            defaultValue={isEdit && image}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledLabel htmlFor="author-name">Author Name:</StyledLabel>
          <StyledInput
            type="text"
            name="author-name"
            id="author-name"
            defaultValue={isEdit && author.name}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledLabel htmlFor="author-avatar">Author Avatar:</StyledLabel>
          <StyledInput
            type="text"
            name="author-avatar"
            id="author-avatar"
            defaultValue={isEdit && author.avatarSource}
          />
        </FormWrapper>
      </StyledForm>
      <SubmitButton type="submit">Save</SubmitButton>
    </>
  );
}

const StyledForm = styled.form`
  display: table;
`;

const StyledInput = styled.input`
  display: table-cell;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 3px;
`;

const StyledLabel = styled.label`
  display: table-cell;
  width: 40%;
  margin-bottom: 1rem;
`;

const StyledTextarea = styled.textarea`
  padding: 3px;
  display: table-cell;
  width: 100%;
  min-height: 15rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid gray;
`;

const FormWrapper = styled.div`
  display: table-row;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  color: #1c1c1c;
  background: #00cc99;
  outline: 1px solid #1c1c1c;
  font-size: 1.1rem;
`;

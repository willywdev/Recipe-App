export default function Form({ recipe, isEdit }) {
  console.log(recipe);
  const { author, description, title, image, neededItems } = recipe;

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" value={isEdit && title} />
      <label htmlFor="description">Recipe:</label>
      <textarea
        type="text"
        name="description"
        id="description"
        value={isEdit && description}
      />
      <label htmlFor="neededItems">Needed Items: (seperate by Comma)</label>
      <input type="text" name="neededItems" id="neededItems" />
      <label htmlFor="image">Recipe Image:</label>
      <input type="text" name="image" id="image" />
      <label htmlFor="author-name">Author Name:</label>
      <input type="text" name="author-name" id="author-name" />
      <label htmlFor="author-avatar">Author Avatar:</label>
      <input type="text" name="author-avatar" id="author-avatar" />
      <button type="submit">Save</button>
    </form>
  );
}

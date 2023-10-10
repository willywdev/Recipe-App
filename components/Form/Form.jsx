export default function Form({ recipe, isEdit }) {
  const { author, description, title, image, neededItems } = recipe;
  const neededItemsString = neededItems.join(", ");

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        defaultValue={isEdit && title}
      />
      <label htmlFor="description">Recipe:</label>
      <textarea
        type="text"
        name="description"
        id="description"
        defaultValue={isEdit && description}
      />
      <label htmlFor="neededItems">Needed Items: (seperate by Comma)</label>
      <input
        type="text"
        name="neededItems"
        id="neededItems"
        defaultValue={isEdit && neededItemsString}
      />
      <label htmlFor="image">Recipe Image:</label>
      <input
        type="text"
        name="image"
        id="image"
        defaultValue={isEdit && image}
      />
      <label htmlFor="author-name">Author Name:</label>
      <input
        type="text"
        name="author-name"
        id="author-name"
        defaultValue={isEdit && author.name}
      />
      <label htmlFor="author-avatar">Author Avatar:</label>
      <input
        type="text"
        name="author-avatar"
        id="author-avatar"
        defaultValue={isEdit && author.avatarSource}
      />
      <button type="submit">Save</button>
    </form>
  );
}

const formatAuthors = (author_ids, authors) => {
  const authorObjects = authors.filter((author) =>
    author_ids.includes(author.id)
  );
  return authorObjects.map((author) => author.name).join(', ');
};

export default formatAuthors;

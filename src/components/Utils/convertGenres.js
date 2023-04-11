const convertGenres = item => {
  let stack = [];

  item.map(({ name }) => stack.push(name));
  return stack.join(', ');
};

export default convertGenres;

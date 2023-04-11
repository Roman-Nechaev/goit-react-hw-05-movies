const formattingOverview = text => {
  let newFormat = text;
  if (newFormat.length > 80) {
    newFormat = text.slice(0, 90) + '...';
  }
  return newFormat;
};

export default formattingOverview;

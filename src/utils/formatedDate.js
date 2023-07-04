const showFormattedDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

export { showFormattedDate };

const showFormattedDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { showFormattedDate };

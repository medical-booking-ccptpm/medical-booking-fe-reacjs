const clearForm = (event, callback) => {
  event.target.reset();
  callback({});
};

export default clearForm;

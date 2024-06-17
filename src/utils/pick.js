const pick = (object = {}) => {
  let obj = {};
  for (let key in object) {
    if (object[key]) {
      obj[key] = object[key];
    }
  }
  return obj;
};

export default pick;

const sumItems = function(array) {
  // Sum all the numbers in the array
  let summation = 0;
  for (let value of array) {
    if (Array.isArray(value)) {
      summation += sumItems(value);
    } else {

      summation += (value);
    }

  }
  return summation;
};

module.exports = sumItems;
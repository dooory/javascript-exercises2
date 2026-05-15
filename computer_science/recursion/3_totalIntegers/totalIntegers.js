const totalIntegers = function (array) {
  if (typeof array !== "object") {
    return;
  }

  if (!Array.isArray(array)) {
    array = Object.values(array);
  }

  const nestedObjects = array.filter(
    (value) => typeof value === "object" && value !== null,
  );

  const nestedNumbers = array.filter(
    (value) => typeof value === "number" && Number.isInteger(value),
  );

  let numCount = nestedNumbers.length;

  nestedObjects.forEach((el) => {
    numCount += totalIntegers(el);
  });

  return numCount;
};

// Do not edit below this line
module.exports = totalIntegers;

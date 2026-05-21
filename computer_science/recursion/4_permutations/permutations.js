const permutations = (array) => {
  // Arrays with less than 2 elements only have 1 mutation
  if (array.length <= 1) {
    return [array];
  }

  // Arrays with 2 elements only have 2 mutation
  if (array.length === 2) {
    return [[...array], array.reverse()];
  }

  let mutations = [];

  array.forEach((element) => {
    // Filter out element from array
    let filteredArray = array.filter(
      (searchElement) => searchElement !== element,
    );

    // Get all mutations for array without element
    // Splice element to the beginning of each mutation
    permutations(filteredArray).map((mutation) => {
      mutations.push(mutation.toSpliced(0, 0, element));
    });
  });

  return mutations;
};

// Do not edit below this line
module.exports = permutations;

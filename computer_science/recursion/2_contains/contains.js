const contains = function(obj, searchValue) {
    const objValues = Object.entries(obj);
    let hasValue = false;

    objValues.forEach(([key, value]) => {
        if (value === searchValue) {
            console.log(key, value);
            
            hasValue = true;

            return;
        }

        if (typeof searchValue === "number" && isNaN(searchValue) && isNaN(value)) {
            hasValue = true;

            return;
        }
        
        if (value !== null && typeof value === "object" && contains(value, searchValue)) {
            hasValue = true;

            return;
        }
    })

    return hasValue;
};
  
// Do not edit below this line
module.exports = contains;

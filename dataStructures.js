// level {1/2/3}
// level 2

const removeEven = (nums) => {
  let odds = nums.filter((x) => x % 2 !== 0);
  return odds;
};

let numbers = [1, 3, 4, 6, 7, 8];
removeEven(numbers);

const toUpperVowel = (name) => {
  var changedName = "";
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i in name) {
    if (vowels.includes(name[i])) {
      if (name[i].toUpperCase() == name[i]) {
        changedName += name[i];
      } else {
        changedName += name[i].toUpperCase();
      }
    } else {
      changedName += name[i];
    }
  }
  return changedName;
};

const name = "Elie";
toUpperVowel(name);

const array = [1, 3, 4, 6, 7, 8, 2, 5];

const maxNumber = (array) => {
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// console.log(Math.max(...array));
// will also fetch max number from the array
maxNumber(array);

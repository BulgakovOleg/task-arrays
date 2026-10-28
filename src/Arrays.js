
export function arraySorting(data) {
  const stringArray = data.split(',');
  const numbersArray = stringArray.map(Number);
  numbersArray.sort((a, b) => a - b);
  return numbersArray.join(',');
}

export function arrayFiltering(data) {
  const numbersArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]<=100) {
      numbersArray.push(data[i]);
    }
  }
  return numbersArray;
}

export function arrayPushing(array1, array2) {
  const numbersArray = [];
  for (let i = 0; i<5; i++) {
    numbersArray.push(array1[i])
    numbersArray.push(array2[i])
  }
  return numbersArray;
	
}

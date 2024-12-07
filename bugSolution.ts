function combine(arr1: number[], arr2: number[]): number[] {
  //Type Guarding
  const numArr1 = arr1.filter(item => typeof item === 'number');
  const numArr2 = arr2.filter(item => typeof item === 'number');
  return numArr1.concat(numArr2);
}

let arr1: (number | string)[] = [1, 2, 3];
arr1.push("4");

let arr2: number[] = [4, 5, 6];

let combinedArr: number[] = combine(arr1, arr2); //This line will work correctly now
console.log(combinedArr); 
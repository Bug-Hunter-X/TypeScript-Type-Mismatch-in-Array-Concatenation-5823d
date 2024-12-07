function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
arr1.push("4"); // Type 'string' is not assignable to type 'number'.

let arr2: number[] = [4, 5, 6];

let combinedArr: number[] = combine(arr1, arr2); //This line should throw an error because arr1 contains a string
console.log(combinedArr);
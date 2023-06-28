function hasTargetSum(array, target) {
  // Write your algorithm here
  // i = starting index from 0 and j = starting index from the end of the array
  for (let i = 0 ; i < array.length;  i++) {
  // inner loop starting from array index[i + 1]
      for (let j = i + 1; j < array.length; j++) {
        let sum = array[i] + array[j];
        if (sum === target) {
          return true;
        }
      }
  
  }

  return false;
}


  // Write the Big O time complexity of your function here
  // O(n²)


/* 
  Add your pseudocode here
  Using a for of loop we can get the item in the list and assign it to a variable someNumber
  Then we can add the someNumber to item in the array
  Finally, do a comparison against the target value
  If the comparison is true, return true
  Else return false

  Using two for in loops, one nested within another,  we iterate over the array items 
  Assign an initializer value of zero to a variable i
  Create a variable for the last item using array.lenght that will be added to the initializer i
  Then add ++1 to it as it goes through
  Within the inner loop, the initializer variable is j. its value is the outer loop initializer + 1.
  With a similar condition to keep the loop going of j<array.lenght. As long as this condition is true, the loop continues until its false.
  This means as i increases, j is ahead with a plus one

  Use a comparison of the i value against the arraay.length value as a conditon for the loop to continue while true
  Add the current value of i to the last item in the array.
  If the result sum opperating  equals to zero then return true
  Else return false.

  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


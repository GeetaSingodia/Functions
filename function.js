function areBothEven(n1,n2){
    return !(n1 % 2) && !(n2 % 2)
}

// Part 1
//Take an array of numbers and return the sum.

function sum(numArray){
    let total = 0;

    // loop through each number in array
    for(let i = 0; i < numArray.length; i++){
        total += numArray[i];
    }
    return total; //Return the total sum
}

 let myNumbers = [1,2,3,4];  // initialise the array 

let sum1 = sum(myNumbers);  //  call the function
console.log('The sum is :', sum1);  // print the sum of array

  //2nd part of 1st section
//Take an array of numbers and return the average
//=========================================================
  
 function average(num){
    let sum = 0; // initialize sum to 0
    for(let i = 0; i< num.length; i++){
        sum += num[i] // add each number to sum
    }
     let avg = sum / num.length  // calculates the average
// calculate the average
   return avg; // Return the average
 }
  let numArray = [2,5,6,9];
  let avgValue = average(numArray);  // call the function
  console.log('The average of array is:' , avgValue);

      // part 3 of 1st part
  //Take an array of strings and return the longest string.
   
    function findLongestString(stringsArray) {
      let longest = ''; // Start with an empty string
    // Loop through each string 
    for (let i = 0; i < stringsArray.length; i++) {
      if (stringsArray[i].length > longest.length) {
        longest = stringsArray[i]; // Update longest string
      }
    }
    return longest; // Return the longest string
  }
  
  let strArray = ['apple', 'watermelon', 'banana']; // An example array of strings
  let longString = findLongestString(strArray); // Call the function with the array
  console.log('The longest string is:', longString); // Output the longest string
  

//   [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// part 2 section 1
//--------------------------------

 function sortByAge(array) {
     return array.sort((a, b) => a.age - b.age);
   }
  
   const people =  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
     
     const sortedPeople = sortByAge(people);
     console.log(sortedPeople);
  
     //Filter the array to remove entries with an age greater than 50.
     // part 2 section 2

     function filterAge(people){
        return people.filter(person => person.age > 50)
     }

     //main result
     const people1 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
     { id: "7", name: "Bilbo", occupation: "None", age: "111" }] ;

     const filterPeople = filterAge(people1);
     console.log(filterPeople);


     //Map the array to change the “occupation” key to “job” and increment every age by 1.

     function updateArray(array){
        for (const person of array){
            person.job = person.occupation; // change occupation to job
            person.age = Number(person.age) + 1; // increment age by 1
        }
        return array;
     }

     // call the function
     const people2 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
     { id: "7", name: "Bilbo", occupation: "None", age: "111" }] ;

    const updatedpeople = updateArray(people2);
    console.log(updatedpeople);
    
    // part 4 of 2nd section
    //Use the reduce method to calculate the sum of the ages.
    //===========================================================

    function sumOfAges(people) {
        return people.reduce((total, person) => total + Number(person.age), 0);

      }
      
    //  main part
       const people3 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
       { id: "48", name: "Barry", occupation: "Runner", age: "25" },
       { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
       { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
       { id: "7", name: "Bilbo", occupation: "None", age: "111" }] ;
      
       const totalAge = sumOfAges(people);
       console.log( 'The total age is:', totalAge); // Output will be the sum of ages


       //Then use the result to calculate the average age.
      //======================================================
      
      function calAvgAge(people){
        // calculate the sum of ages 
        const sumOfAges = people.reduce((total,person) => total + Number(person.age), 0);
        // calculates the average age
        const averageAge = sumOfAges / people.length ;

        return averageAge;
      }

      // main 
      const people4 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
      { id: "48", name: "Barry", occupation: "Runner", age: "25" },
      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }] ;

      const avgAge = calAvgAge(people4);
      console.log('The average age is :' ,avgAge);


      // part 1 of section 3rd
      //Take an object and increment its age field.
      //=====================================

      function incrementAge(person) {
        // Increment the age by 1
        person.age += 1;
      }
      
      // main
      const alice = { name: 'James', age: 30 };
      console.log(`Before: ${alice.name} is ${alice.age} years old.`);
      
      incrementAge(alice);
      
      console.log(`After: ${alice.name} is now ${alice.age} years old.`);

      //Take an object, make a copy, and increment the age field of the copy. Return the copy.
      // Section 3rd part 2

      function increaseAgeAndCopy(person){
         const personCopy = { ...person, age : person.age + 1};
          return personCopy;
      }
       
      // main
      const originalPerson = {name : 'John', age : 30};
      const updatedPerson = increaseAgeAndCopy(originalPerson);

      console.log(updatedPerson);

    
      
      
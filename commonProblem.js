// 1. Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result..Task: 
const people = [
    { name: "Jeni", age: 25, gender: "female" },
    { name: "Dow", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Eve", age: 40, gender: "female" },
  ];
  
  function getMaleNames(peopleArray) {
    return peopleArray
      .filter(person => person.gender !== "female")
      .map(person => person.name);
  }
  
  const maleNames = getMaleNames(people);
  console.log(maleNames);

//   2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// Array of objects representing books
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 },
  ];
  
  function getBookTitles(bookArray) {
    return bookArray.map(book => book.title);
  }
  
  const bookTitles = getBookTitles(books);
  console.log(bookTitles);

//   3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
  // Function to square a number
function square(num) {
    return num * num;
  }
  
  function double(num) {
    return num * 2;
  }
  
  function addFive(num) {
    return num + 5;
  }
  
  function composeFunctions(num) {
    const squared = square(num);
    const doubled = double(squared);
    return addFive(doubled);
  }
  
  const result = composeFunctions(3);
  console.log(result);

// 4.  Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2005 },
    { make: "Ford", model: "Focus", year: 2018 },
    { make: "Chevrolet", model: "Malibu", year: 2012 },
    { make: "Nissan", model: "Sentra", year: 2008 },
  ];
  
  function sortCarsByYear(carsArray) {
    return carsArray.sort((a, b) => a.year - b.year);
  }
  
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);

//   5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const member = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
  ];
  
  // Function to find and modify a person's age
  function findAndModifyAge(memberArray, personName, newAge) {
    const person = memberArray.find(person => person.name === personName);
    if (person) {
      person.age = newAge; // Modify the age property if the person is found
    } else {
      console.log(`Person named ${personName} not found.`);
    }
    return memberArray;
  }
  
  // Update Bob's age
  const updatedmember = findAndModifyAge(member, "Bob", 32);
  
  // Print the updated array
  console.log(updatedmember);
  
  
  
  
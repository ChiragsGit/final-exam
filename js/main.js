console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
console.log("Name: Chirag Sabharwal")
console.log("Student Number: 200538042")

// Step 2: Create a block scoped, immutable variable that stores an empty array
const myArray = []

// Step 3: Add the 3 people's names to the array
myArray.push('Meag');
myArray.push('Freya');
myArray.push('Ella');

// Step 4: Remove the second array item from the array

myArray.splice(1,1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable



// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const image = document.querySelector('#main-content aside h2');
image.addEventListener("click", function () {
    console.log("aside h2 was clicked");
    alert("Hello from Boo the World's Cutest Dog!");
});

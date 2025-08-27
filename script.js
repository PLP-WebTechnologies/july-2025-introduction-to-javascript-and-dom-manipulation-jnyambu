// ================================
// Part 1: Variable Declarations & Conditionals
// ================================
let userNumber;  // variable to hold input number
const message = "Welcome to the JavaScript Project!";

console.log(message);

// ================================
// Part 2: Custom Functions
// ================================

// Function 1: Check if number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return num + " is Even.";
  } else {
    return num + " is Odd.";
  }
}

// Function 2: Generate a multiplication table
function generateTable(num) {
  let table = [];
  for (let i = 1; i <= 5; i++) {
    table.push(`${num} x ${i} = ${num * i}`);
  }
  return table;
}

// ================================
// Part 3: Loops
// ================================

// Example 1: For loop
function countNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  return output;
}

// Example 2: While loop
function listNumbers(num) {
  let i = 1;
  let items = [];
  while (i <= num) {
    items.push("Number: " + i);
    i++;
  }
  return items;
}

// ================================
// Part 4: DOM Interactions
// ================================
document.getElementById("checkBtn").addEventListener("click", function() {
  // Get user input
  userNumber = parseInt(document.getElementById("numberInput").value);

  // Interaction 1: Display if number is even or odd
  document.getElementById("result").textContent = checkEvenOdd(userNumber);

  // Interaction 2: Display counting (for loop)
  document.getElementById("loopResult").textContent = "Counting: " + countNumbers();

  // Interaction 3: Display multiplication table in list
  let list = document.getElementById("listResult");
  list.innerHTML = ""; // clear before showing new
  let tableData = generateTable(userNumber);
  tableData.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});

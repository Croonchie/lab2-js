// Step 2: If-else Condition
let number = -5; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Step 3: Switch Statement
let day = 4;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number.");
}

// Step 4: Loops

// For loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop
console.log("While Loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Do...while loop
console.log("Do...While Loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Step 5: Control Flow with break and continue

// Break Example
console.log("Break Example:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stop the loop when i is 3
    }
    console.log(i);
}

// Continue Example
console.log("Continue Example:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip number 3
    }
    console.log(i);
}

// Step 6: Scope and Context

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeExample();


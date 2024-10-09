// Write your solution in this file!
// Global variable
var customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Access and modify the global variable
}

// Function to set the best customer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare a global variable
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Change the global variable
}

// Declare a constant for least favorite customer
const leastFavoriteCustomer = 'Alice';

// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
    // Attempt to change the constant
    leastFavoriteCustomer = 'Bob'; // This will throw an error
}
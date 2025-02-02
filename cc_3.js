// task 1 - Product Price Management //
let prices = [20, 30, 40, 50, 60]; // prices array
prices.push(70); // Add new price to the end of the array
prices.shift(); // Remove the first price from the array

console.log("Updated prices: ", prices); // Print the updated array of prices

// task 2 - Modifting Customer Orders //
let orders = [100, 200, 300, 400, 500]; // orders array
orders[2] += 5; // Increase the 3rd order by 5
let totalOrders = orders.reduce((total, orders) => total + orders, 0); // Calculate the total of all orders

console.log("Updated orders: ", orders); // Print the updated array of orders
console.log("Total order count: ", totalOrders); // Print the total of all orders

// task 3 - Employee Performance Tracking //
let employee = {
    name: "Atticus",
    role: "Program Tester",
    performanceScore: 95,
    isActive: true
}; // employee object

employee.performanceScore = 95; // Increase the performance score by 5
employee.promotionEligible = true; // Add a new property to the object

console.log("Updated employee: ", employee); // Print the updated employee object

// task 4 - Customer Feedback Records //
let feedbacks = [
    {customerName: "Bob", feedbackText: "Great service!", rating: 3},
    {customerName: "Bobert", feedbackText: "Awesome experience!", rating: 5},
    {customerName: "Robert", feedbackText: "Quick Service!", rating: 5}
]; // feedbacks array

feedbacks.push({customerName: "Kevin", feedbackText: "Wonderful service!", rating: 4}); // Add new feedback to the end of the array

console.log("Updated feedbacks: ", feedbacks); // Print the updated array of feedbacks

// task 5 - Inventory Management System //
let inventory = {
    itemName: "Bubble Gum",
    stockCount: 200,
    price: 0.50,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
}; // inventory object

console.log(inventory); // Print the inventory object
console.log("Total inventory value: ", inventory.calculateTotalValue()); // Print the total value of the inventory



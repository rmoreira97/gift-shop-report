let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday", "Sunday"
];
const firstWeekSales = sales.filter((element, index) => index < 7);
const firstWeekCustomers = customers.filter((element, index) => index < 7);
const firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr);
const firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev +
  curr);
const firstWeekAverage = firstWeekSalesSum / firstWeekSales.length;
const firstWeekCustomerAvg = firstWeekSalesSum / firstWeekCustomersSum;
const firstWeekDailyAverage = firstWeekSales.map((element, index) => element /
  firstWeekCustomers[index]);
const labeled = firstWeekDailyAverage.map((element, index) =>
  `${daysOfTheWeek[index]} ${element.toFixed(2)}`);
const labeledString = labeled.reduce((accumulator, currentValue) =>
  `${accumulator}, ${currentValue}`);
  
console.log("First Week Sales: " + firstWeekSales);
console.log("First Week Customers: " + firstWeekCustomers);
console.log("First Week Sales Sum: " + firstWeekSalesSum);
console.log("First Week Customers Sum: " + firstWeekCustomersSum);
console.log("First Week Average: " + firstWeekAverage);
console.log("First Week Customer Average: " + firstWeekCustomerAvg);
console.log(labeledString);

// end of index.js
const orders = [

    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук",  price: 50000, quantity: 1 },

            { name: "Мышь", price: 1500,  quantity: 2 }
        ]

    },

    {

        id: 2,

        customer: "Alan",

        items: [

            { name: "Телефон", price: 30000, quantity: 1 },

            { name: "Чехол",   price: 1000,  quantity: 3 }

        ]

    },

    {

        id: 3,

        customer: "Jane",

        items: [

            { name: "Клавиатура", price: 2500,  quantity: 1 },

            { name: "Монитор", price: 12000, quantity: 1 }

        ]

    }

];

var totalIncome = 0;
var maxSum = 0;
var topCustomer = "";

for (var i = 0; i < orders.length; i++) {
    var sum = 0;

    for (var j = 0; j < orders[i].items.length; j++) {
        var item = orders[i].items[j];

        sum += item.price * item.quantity;
    }

    if (sum > maxSum) {
        maxSum = sum;
        topCustomer = orders[i].customer;
    }
    console.log("Sum of order " + orders[i].customer + ": " + sum);
    totalIncome += sum;
}
console.log("The store's total income: " + totalIncome);
console.log("The most expensive order made: " + topCustomer);

var products = {};

for (var i = 0; i < orders.length; i++) {

    for (var j = 0; j < orders[i].items.length; j++) {

        var item = orders[i].items[j];

        if (products[item.name]) {
            products[item.name] += item.quantity;
        } else {
            products[item.name] = item.quantity;
        }
    }
}
console.log("All sold products: ")
console.log(products)
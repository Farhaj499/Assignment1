import inquirer from "inquirer";
// Choosing Fruits or Vegetable
inquirer.prompt({
    type: 'list',
    name: 'order',
    message: 'What do you want to buy?',
    choices: ['Fruits', 'Vegetables'],
}).then((answers) => {
    if (answers.order === 'Fruits')
        selectFruits();
    else
        selectVegetables();
});
function selectFruits() {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Select fruits',
            name: 'fruits',
            choices: [
                {
                    name: 'Apple: 250',
                },
                {
                    name: 'Mango: 400',
                },
                {
                    name: 'Banana: 150',
                },
                {
                    name: 'Apricot: 500',
                },
                {
                    name: 'Pomegranate: 300',
                },
                {
                    name: 'WaterMelon: 200',
                }
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one fruit.';
                }
                return true;
            },
        },
    ])
        .then((answers) => {
        let total = calculateBill(answers.fruits.length, answers.fruits);
        total = discount(total);
        console.log("Your total Bill is " + total);
        console.log("\n");
        checkOut(total);
    });
}
function selectVegetables() {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Select vegetables',
            name: 'vegetables',
            choices: [
                {
                    name: 'Potato: 50',
                },
                {
                    name: 'Broccoli: 90',
                },
                {
                    name: 'Cucumber: 150',
                },
                {
                    name: 'Carrot: 100',
                },
                {
                    name: 'Capsicum: 250',
                },
                {
                    name: 'Turnip: 350',
                },
                {
                    name: 'Ginger: 500',
                },
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one vegetable.';
                }
                return true;
            },
        },
    ])
        .then((answers) => {
        let total = calculateBill(answers.vegetables.length, answers.vegetables);
        total = discount(total);
        console.log("Your total Bill is " + total);
        console.log("\n");
        checkOut(total);
    });
}
// Calculating Bill based on the items
function calculateBill(len, ...items) {
    let totalBill = 0;
    //console.log(items);
    for (let i = 0; i < len; i++) {
        if (items[0][i] === 'Apple: 250') {
            totalBill = totalBill + 250;
        }
        else if (items[0][i] === 'Mango: 400') {
            totalBill = totalBill + 400;
        }
        else if (items[0][i] === 'Banana: 150')
            totalBill = totalBill + 150;
        else if (items[0][i] === 'Apricot: 500')
            totalBill = totalBill + 500;
        else if (items[0][i] === 'Pomegranate: 300')
            totalBill = totalBill + 300;
        else if (items[0][i] === 'WaterMelon: 200')
            totalBill = totalBill + 200;
        else if (items[0][i] === 'Potato: 50')
            totalBill = totalBill + 50;
        else if (items[0][i] === 'Broccoli: 90')
            totalBill = totalBill + 90;
        else if (items[0][i] === 'Cucumber: 150')
            totalBill = totalBill + 150;
        else if (items[0][i] === 'Carrot: 100')
            totalBill = totalBill + 100;
        else if (items[0][i] === 'Capsicum: 250')
            totalBill = totalBill + 250;
        else if (items[0][i] === 'Turnip: 350')
            totalBill = totalBill + 350;
        else if (items[0][i] === 'Ginger: 500')
            totalBill = totalBill + 500;
    }
    return totalBill;
}
// If bill exceeds 500, customer will get 20% discount
function discount(disc) {
    console.log("\n");
    if (disc >= 500) {
        disc = disc * (0.80);
        console.log("Congrats! You got 20% Discount");
    }
    return disc;
}
function checkOut(finalBill) {
    inquirer.prompt({
        type: 'list',
        name: 'checkoutProcess',
        message: 'Please select the Checkout Method?',
        choices: ['Cash on Delivery', 'Credit or Debit Card', 'EasyPaisa'],
    }).then((answers) => {
        if (answers.checkoutProcess === 'Cash on Delivery') {
            console.log("Your order had been placed. You will pay " + String(finalBill) + " via " + answers.checkoutProcess);
        }
        else if (answers.checkoutProcess === 'Credit or Debit Card') {
            console.log("Your order had been placed. You will pay " + String(finalBill) + " via " + answers.checkoutProcess);
        }
        else if (answers.checkoutProcess === 'EasyPaisa') {
            console.log("Your order had been placed. You will pay " + String(finalBill) + " via " + answers.checkoutProcess);
        }
    });
}

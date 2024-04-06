#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280
};
let userAnswers = await inquirer.prompt([
    {
        name: 'From',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR']
    },
    {
        name: 'To',
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR']
    },
    {
        name: 'Amount',
        message: "Enter your amount",
        type: 'number'
    },
]);
let fromAmount = currency[userAnswers.From];
let toAmount = currency[userAnswers.To];
let amount = userAnswers.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(baseAmount);
console.log(convertedAmount);

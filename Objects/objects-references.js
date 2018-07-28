let myAccount = {
    name: 'Jorge Rivera',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. -> $${account.income} in income. -> $${account.expenses} in expenses.`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 3.20)
addExpense(myAccount, 1.70)
addIncome(myAccount, 9.10)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
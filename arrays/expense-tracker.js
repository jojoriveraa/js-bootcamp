const account = {
    name: 'Jorge Rivera',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push(
            {
                description: description,
                amount: amount
            }
        )
    },
    addIncome: function (description, amount) {
        this.incomes.push(
            {
                description: description,
                amount: amount
            }
        )
    },
    getExpensesSummary: function () {
        let total = 0
        this.expenses.forEach(function (expense) {
            total = total + expense.amount
        })
        return total
    },
    getIncomesSummary: function () {
        let total = 0
        this.incomes.forEach(function (income) {
            total = total + income.amount
        })
        return total
    },
    getAccountSummary: function () {
        let expenses = this.getExpensesSummary()
        let incomes = this.getIncomesSummary()
        let balance = incomes - expenses
        return `${this.name} has a balance of $${balance}. $${incomes} in incomes. $${expenses} in exenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
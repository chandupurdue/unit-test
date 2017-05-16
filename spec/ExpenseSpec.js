describe("Expense objects",function(){
it("should be a type of ExpenseItem",function(){
	var expenseItem = new ExpenseItem();
	var expense = new Expense(expenseItem);
expect(expense.expenseItem).toBe(expenseItem);
});
});
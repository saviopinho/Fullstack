import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const moment = require('moment');

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'CAR EXPENSE',
        amount: 123.89,
        date: moment('2022-05-15'),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log('expense:', expense);
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;

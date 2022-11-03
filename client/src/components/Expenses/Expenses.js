import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const { items } = props;
    const [selectedYear, setSelectedYear] = useState('-1');

    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear);
    };

    const filtered = items.filter(expense => {
        const year = expense.date.year().toString();

        if (selectedYear === '-1') {
            return !year.includes(selectedYear);
        }

        return year.includes(selectedYear);
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filtered} />
            <ExpensesList items={filtered} />
        </Card>
    );
}

export default Expenses;

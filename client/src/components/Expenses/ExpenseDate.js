import './ExpenseDate.css';

const ExpenseDate = props => {
    const { date } = props;
    const day = date.format('DD');
    const month = date.format('MMMM');
    const year = date.format('YYYY');

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;

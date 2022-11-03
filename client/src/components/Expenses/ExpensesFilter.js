import './ExpensesFilter.css';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
    const filterChangeHandler = event => {
        onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={filterChangeHandler}>
                    <option value="-1">All</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;

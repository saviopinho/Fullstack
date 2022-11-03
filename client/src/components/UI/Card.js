import './Card.css';

function Card({ className, children }) {
    const classes = 'card ' + className;

    console.log('children:', children);

    return <div className={classes}>{children}</div>;
}

export default Card;

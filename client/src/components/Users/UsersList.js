import UserItem from './UserItem';
import './UsersList.css';

const UsersList = ({ items, onDeleteUser }) => {
    if (items.length === 0) {
        return <h2 className="users-list__fallback">Found no users.</h2>;
    }

    return (
        <div style={{ marginTop: '150px' }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Phone</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items &&
                        items.map((item) => (
                            <UserItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                email={item.email}
                                phone={item.phone}
                                onDeleteUser={onDeleteUser}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;

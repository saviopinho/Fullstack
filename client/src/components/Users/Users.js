import React from 'react';
import UsersList from './UsersList';

import './Users.css';

function Users({ items, onDeleteUser }) {
    const onDeleteHandler = (id) => {
        onDeleteUser(id);
    };

    return (
        <div className="users">
            <UsersList items={items} onDeleteUser={onDeleteHandler} />
        </div>
    );
}

export default Users;

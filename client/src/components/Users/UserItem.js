import React from 'react';
import UserOperations from './UserOperations';
import './UserItem.css';

function UserItem({ id, name, email, phone, onDeleteUser }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <UserOperations id={id} onDeleteUser={onDeleteUser} />
            </td>
        </tr>
    );
}

export default UserItem;

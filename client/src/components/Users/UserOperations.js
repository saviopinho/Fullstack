import React from 'react';
import { Link } from 'react-router-dom';

function UserOperations({ id, onDeleteUser }) {
    const deleteUserHandler = async () => {
        await onDeleteUser(id);
    };

    return (
        <div>
            <Link to={`/update/${id}`}>
                <button className="btn btn-edit">Edit</button>
            </Link>
            <button className="btn btn-delete" onClick={deleteUserHandler}>
                Delete
            </button>
            <Link to={`/view/${id}`}>
                <button className="btn btn-view">View</button>
            </Link>
        </div>
    );
}

export default UserOperations;

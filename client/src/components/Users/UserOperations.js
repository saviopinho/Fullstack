import React from 'react';
import { Link } from 'react-router-dom';

function UserOperations({ id, onDeleteUser }) {
    const deleteUserHandler = async () => {
        await onDeleteUser(id);
    };

    return (
        <div>
            <Link to={`/update/${id}`}>
                <button className="btn btn-edit">Editar</button>
            </Link>
            <button className="btn btn-delete" onClick={deleteUserHandler}>
                Deletar
            </button>
            <Link to={`/view/${id}`}>
                <button className="btn btn-view">Abrir</button>
            </Link>
        </div>
    );
}

export default UserOperations;

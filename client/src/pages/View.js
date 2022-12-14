import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './View.css';

const View = () => {
    const [user, setUser] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id]);

    const getSingleUser = async (id) => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_USERS}/${id}`
        );

        if (response.status === 200) {
            setUser({ ...response.data });
        }
    };

    console.log('user:', user);

    return (
        <div style={{ marginTop: '150px' }}>
            <div className="card">
                <div className="card-header">
                    <p>Detalhes Contato</p>
                </div>
                <div className="container">
                    <strong>Nome: </strong>
                    <span>{user && user.name} </span>
                    <br />
                    <br />
                    <strong>Email: </strong>
                    <span>{user && user.email} </span>
                    <br />
                    <br />
                    <strong>Telefone: </strong>
                    <span>{user && user.phone} </span>
                    <br />
                    <br />
                    <Link to="/">
                        <button className="btn btn-edit">Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default View;

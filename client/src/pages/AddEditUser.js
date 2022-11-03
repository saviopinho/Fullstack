import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEditUser.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    phone: '',
};

const AddEditUser = () => {
    const [state, setState] = useState(initialState);
    const { name, email, phone } = state;

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        } else {
            setState(initialState);
        }
    }, [id]);

    const getSingleUser = async (id) => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_USERS}/${id}`
        );

        if (response.status === 200) {
            setState(response.data);
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const addUser = async (data) => {
        const response = await axios
            .post(process.env.REACT_APP_API_USERS, data)
            .then((response) => response)
            .catch((error) => error.response);

        if (response.status === 201) {
            toast.success('Usuario Adicionado com Sucesso!');
        }

        return response;
    };

    const updateUser = async (data, id) => {
        const response = await axios
            .put(`${process.env.REACT_APP_API_USERS}/${id}`, data)
            .then((response) => response)
            .catch((error) => error.response);

        if (response.status === 200) {
            toast.success('Usuario Atualizado com Sucesso!');
        }

        return response;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = '';

        if (!name || !email || !phone) {
            toast.error('Por favor, preencha os campos');
        } else {
            if (!id) {
                response = await addUser(state);
            } else {
                response = await updateUser(state, id);
            }

            if (response.status !== 500) {
                setTimeout(() => navigate('/'), 500);
            } else {
                toast.error(
                    `Erro ao adicionar usuario: ${response.data?.errors[0].message.toUpperCase()}`
                );
            }
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <form
                style={{
                    margin: 'auto',
                    padding: '15px',
                    maxWidth: '400px',
                    alignContent: 'center',
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone No. ..."
                    value={phone}
                    onChange={handleInputChange}
                />

                <input type="submit" value={id ? 'Atualizar' : 'Adicionar'} />
            </form>
        </div>
    );
};

export default AddEditUser;

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
        const response = await axios.post(
            process.env.REACT_APP_API_USERS,
            data
        );

        if (response.status === 201) {
            toast.success('Usuario Adicionado com Sucesso!');
        }
    };

    const updateUser = async (data, id) => {
        const response = await axios.put(
            `${process.env.REACT_APP_API_USERS}/${id}`,
            data
        );

        if (response.status === 200) {
            toast.success('Usuario Atualizado com Sucesso!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            toast.error('Please provide value in each input field');
        } else {
            if (!id) {
                addUser(state);
            } else {
                updateUser(state, id);
            }

            setTimeout(() => navigate('/'), 500);
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

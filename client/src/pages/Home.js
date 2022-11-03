import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Users from '../components/Users/Users';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get(process.env.REACT_APP_API_USERS);
        if (response.status === 200) {
            setData(response.data);
        }
    };

    const deleteUserHandler = async (id) => {
        if (
            window.confirm(
                'Are you sure that you wanted to delete that user record'
            )
        ) {
            const response = await axios.delete(
                `${process.env.REACT_APP_API_USERS}/${id}`
            );

            if (response.status === 200) {
                toast.success('Usuario deletado com sucesso!');
                getUsers();
            }
        }
    };

    return <Users items={data} onDeleteUser={deleteUserHandler} />;
};

export default Home;

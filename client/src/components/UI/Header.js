import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const [activeTab, setActiveTab] = useState('Home');

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('Home');
        } else if (location.pathname === '/add') {
            setActiveTab('AddUser');
        } else if (location.pathname === '/about') {
            setActiveTab('About');
        }
    }, [location]);

    const activeTabHandler = (event) => {
        setActiveTab(event.target.innerText);
    };

    return (
        <div className="header">
            <p className="logo">Teste Cubos - CRUD</p>
            <div className="header-right">
                <Link to="/">
                    <p
                        className={`${activeTab === 'Home' ? 'active' : ''}`}
                        onClick={activeTabHandler}
                    >
                        Principal
                    </p>
                </Link>
                <Link to="/add">
                    <p
                        className={`${
                            activeTab === 'AddUser' ? 'active' : ''
                        } `}
                        onClick={activeTabHandler}
                    >
                        Adicionar Usuario
                    </p>
                </Link>
                <Link to="/about">
                    <p
                        className={`${activeTab === 'About' ? 'active' : ''} `}
                        onClick={activeTabHandler}
                    >
                        Sobre
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Header;

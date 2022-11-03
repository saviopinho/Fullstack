import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';

import Header from './components/UI/Header';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <ToastContainer />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add" element={<AddEditUser />} />
                    <Route path="/view/:id" element={<View />} />
                    <Route path="/update/:id" element={<AddEditUser />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

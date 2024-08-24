import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Services from '../pages/Services';
import Projects from '../pages/Projects'
import Blogs from '../pages/Blogs';
import About from '../pages/About'
import './Routing.css'
import App from '../../App';
import Home from '../pages/Home';

const Routing = () => {
    return (
        <Router>
            <div className="navbar">
            <nav className='menu'>
                <ul className='menuItems'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </nav>
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Projects />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
            </div>
        </Router>
    );
};

export default Routing;

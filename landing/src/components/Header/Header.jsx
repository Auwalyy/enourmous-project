import React from 'react';
import { CiDark, CiSun } from 'react-icons/ci';
import './Header.css';

const Header = ({theme, toggleTheme}) => {

    const nav__links = [
        {
            path: '#home',
            display: 'Home'
        },
        {
            path: '#about',
            display: 'About'
        },
        {
            path: '#services',  // Fixed typo from 'serives' to 'services'
            display: 'Services'
        },
        {
            path: '#projects',
            display: 'Projects'
        },
        {
            path: '#blog',
            display: 'Blog'
        },
    ];

    return (
        <header className='header'>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>Enourmous</h2>
                    </div>

                    {/** navigation */}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => (
                                    <li key={index} className="menu__item">
                                        <a href={item.path} className="menu__link">
                                            {item.display}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                   {/** light mode */}
                   <div className="light__mode">
                     <span onClick={toggleTheme}>
                        {
                            theme === 'light-theme' ?
                            (
                             <span><CiDark />Dark mode</span> 
                            ) : ( 
                            <span><CiSun />Light mode</span>
                        )}
                         </span>
                   </div>

                </div>
            </div>
        </header>
    );
}

export default Header;

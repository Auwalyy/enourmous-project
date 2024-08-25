import React, { useEffect, useRef } from 'react';
import { CiDark, CiSun } from 'react-icons/ci';
import  {IoMdMenu} from 'react-icons/io'
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
            path: '#services', 
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


    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
            headerRef.current.classList.add('header__shrink')
        } else {
            headerRef.current.classList.remove('header__shrink')
        }
    }


    useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=> window.removeEventListener('scroll', headerFunc)
    },[])




    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')


        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTop({
            left: 0,
            top: location - 80,
        });
    }


    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')

    return (
        <header className='header' ref={headerRef}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>Enourmous</h2>
                    </div>

                    {/** navigation */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => (
                                    <li key={index} className="menu__item">
                                        <a href={item.path} onClick={handleClick} className="menu__link">
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

                    <span className="mobile__menu" onClick={toggleMenu}><IoMdMenu /></span>
                </div>
            </div>
        </header>
    );
}

export default Header;

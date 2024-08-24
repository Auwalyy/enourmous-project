import React from 'react'
import './Footer.css'




const quickLink = [
    {
        path: '#',
        dispplay: 'Marketing'
    },
    {
        path: '#',
        dispplay: 'Analytics'
    },
    {
        path: '#',
        dispplay: 'Commerce'
    },
]

const quickLink02 = [
    {
        path: '#',
        dispplay: 'Pricing'
    },
    {
        path: '#',
        dispplay: 'Documentation'
    },
    {
        path: '#',
        dispplay: 'Guides'
    },
]


const quickLink03 = [
    {
        path: '#about',
        dispplay: 'About'
    },
    {
        path: '#',
        dispplay: 'Job'
    },
    {
        path: '#blog',
        dispplay: 'Blog'
    },
]



const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>Enourmous Hub.</h2>
                    <p className="description">Grow with us</p>

                    <p className="small__text description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Praesentie esse  Praesentie esse? sit amet consectetu
                    </p>
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Solutions</h3>
                    <ul className="quick__links">
                        {
                            quickLink.map((item,index)=>(
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.dispplay}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Support</h3>
                    <ul className="quick__links">
                        {
                            quickLink02.map((item,index)=>(
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.dispplay}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Company</h3>
                    <ul className="quick__links">
                        {
                            quickLink03.map((item,index)=>(
                                <li className="quick__link-item" key={index}>
                                    <a href={item.path}>{item.dispplay}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </div>

            <p className="copyright">Copyright {year}, developed by enourmus team, All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
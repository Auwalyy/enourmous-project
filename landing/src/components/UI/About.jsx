import React from 'react'
import './About.css'
import { GrTime, GrWifi } from 'react-icons/gr'
import aboutImg from '../../assets/images/about-us.jpg'


const chooseData = [
    {
        icon: <GrWifi />,
        title: 'First working process',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos consectetur autem eligendi corporis qui animi quas tempora veritatis numquam?'
    },
    {
        icon: <GrWifi />,
        title: 'Dedicated team',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos consectetur autem eligendi corporis qui animi quas tempora veritatis numquam?'
    },
    {
        icon: <GrTime />,
        title: '24/7 Hours support',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos consectetur autem eligendi corporis qui animi quas tempora veritatis numquam?'
    },
]

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className='subtitle'>Why choose us</h6>
                        <h2>Specialist in advicing clients on</h2>
                        <h2 className="highlight">financial challenges</h2>
                        <p className="description about__content-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sunt alias nemo earum! At obcaecati recusandae eos
                            ipsa non pariatur excepturi!
                            Sunt alias nemo earum! At obcaecati recusandae eos
                            ipsa non pariatur excepturi!
                        </p>

                        <div className='choose__item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose__us-item" key={index}>
                                        <span className="choose__us-icon">
                                            <i>{item.icon}</i>
                                        </span>
                                        <div>
                                            <h4 className="choose__us-title">{item.title}</h4>
                                            <p className="description">{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about__img">
                        <img src={aboutImg}  alt="about-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
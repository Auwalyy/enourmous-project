import React from 'react'
import './Services.css'
import { GrServices } from 'react-icons/gr'


const serviceData = [
    {
        icon: <GrServices />,
        title: 'App Development',
        desc: 'Lorem ipsum dolor, sit amet elit, quis quae numqua quas ullam natus explicabo velit atque'

    },
    {
        icon: <GrServices />,
        title: 'Web Design',
        desc: 'Lorem ipsum dolor, sit amet elit, quis quae numqua quas ullam natus explicabo velit atque'
    },
    {
        icon: <GrServices />,
        title: 'Graphic Design',
        desc: 'Lorem ipsum dolor, sit amet elit, quis quae numqua quas ullam natus explicabo velit atque'
    },
    {
        icon: <GrServices />,
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor, sit amet elit, quis quae numqua quas ullam natus explicabo velit atque'
    },
]

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="services__top-content">
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className="highlight">our best services</h2>
                </div>


                <div className="service__item-wrapper">
                    {
                        serviceData.map((item, index) => (
                            <div className="services__item" key={index}>
                                <span className="service__icon"><i>{item.icon}</i></span>
                                <h3 className="services__title">{item.title}</h3>
                                <p className="description">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
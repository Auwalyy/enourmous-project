import React from 'react'
import './Team.css'

import team01 from '../../assets/images/team-01.png'
import team02 from '../../assets/images/team-02.png'
import team03 from '../../assets/images/team-03.png'
import team04 from '../../assets/images/team-04.png'
import { GrLinkedin, GrTwitter } from 'react-icons/gr'



const teamData = [
    {
        imgUrl: team01,
        name: 'Shehu usman',
        position: 'Web desiner'
    },
    {
        imgUrl: team02,
        name: 'Na Kore',
        position: 'Web & App Developer'
    },
    {
        imgUrl: team03,
        name: 'Baffa',
        position: 'Full-stack Developer'
    },
    {
        imgUrl: team04,
        name: 'Shehu usman',
        position: 'Digital Marketer'
    },
]


const Team = () => {
    return (
        <section className='our__team'>
            <div className="container">
                <div className="team__content">
                    <h6 className="subtitle">Our Team</h6>
                    <h2>Meet with <span className="highlight">our team</span></h2>
                </div>

                <div className="team__wrapper">
                    {
                        teamData.map((item, index) => (
                            <div className="team__item" key={index}>
                                <div className="team__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <div className="team__details">
                                    <h4>{item.name}</h4>
                                    <p className="description">{item.position}</p>

                                    <div className="team__member-social">
                                        <span><i><GrLinkedin /></i></span>
                                        <span><i><GrTwitter /></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
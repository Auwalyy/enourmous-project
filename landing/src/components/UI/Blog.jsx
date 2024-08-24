import React from 'react'
import './Blog.css'
import video from '../../assets/images/video.png'
import { FaArrowRight } from 'react-icons/fa'
import articleImg from '../../assets/images/article.png'
import caseStudy from '../../assets/images/case-study.png'



const blogData = [
    {
        imgUrl: video,
        title: 'Video',
        desc: 'To know about work, Watch some video f....',
        linkUrl: '#'
    },
    {
        imgUrl: articleImg,
        title: 'Articles',
        desc: 'Do you want to improve the way your brand interacts with customers? lets talk...',
        linkUrl: '#'
    },
    {
        imgUrl: caseStudy,
        title: 'Case Study',
        desc: 'Boost your conversations rate with us....',
        linkUrl: '#'
    },
]

const Blog = () => {
    return (
        <section>
            <div className="container">
                <div className="blog__top-content">
                    <h6 className="subtitle">Our Blog</h6>
                    <h2>Let's have a look from <span className="highlight">
                        recent blog</span></h2>
                </div>

                <div className="blog__wrapper">
                    {
                        blogData.map((item, index) => (
                            <div className="blog__item" key={index}>
                                <h2>{item.title}</h2>
                                <div className="blog__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <p className="description blog__desc">
                                    {item.desc}
                                </p>
                                <div>
                                    <a href={item.linkUrl} className="learn__more">
                                        <i><FaArrowRight /></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog
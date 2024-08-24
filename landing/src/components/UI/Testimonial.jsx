import React from 'react'
import './Testimonial.css'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'


import slider from 'react-slick/lib/slider'

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        SlideToScroll: 1,
        swipeToSlide: true,
    }

  return (
    <section>
         <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than <span className="highlight">1000 customers</span></h2>
            </div>
            <div className="slider__wrapper">
           <Slider {...settings} >
            <div className='slider__item'>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing
                     elit. Possimus, ipsum. Nobis, enim officiis! Aspernatur mollitia,
                    dolore facere voluptas dolorem, doloribus tempora amet 
                    libero ab atque, esse distinctio velit ea enim eos optio
                     odio delectus deleniti? Ratione sed delectus quo ipsum!</p>

                    <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava01} alt="" />
                        </div>

                        <div>
                            <h5 className="customer__name">John Doe</h5>
                            <p className="description">CEO, Workcreation</p>
                        </div>
                    </div>
            </div>
            </Slider>
            </div>
         </div>
    </section>
  )
}

export default Testimonial
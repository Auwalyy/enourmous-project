import React from "react";
import styles from './Hero.module.css'
import heroImg from '../assets/image1.jpg'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
    {/** */}
        <p className={styles.description}>
            Grow your business fast!
            <br /> 
                Enormous project is brought to you provide seamless Solution to your Business
           
        </p>
        
         <img src={heroImg} alt="" />
       <br />
         <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a> 
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero

import React from "react";

import styles from "./Services.module.css";
//import cursor from '../../assets/about/cursorIcon.png'
//import server from '../../assets/about/serverIcon.png'
//import uiicn from '../../assets/about/uiIcon.png'
import { MdDesignServices, MdOutlineWeb } from 'react-icons/md'
import { FaMobile } from 'react-icons/fa'

 const Services = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Our services</h2>
      <div className={styles.content}>
       
        <div className={styles.aboutItems}>
          <main className={styles.aboutItem}>
          <div style={{color: '#0163d2', textAlign: 'center'}}> 
          <MdOutlineWeb size={50} />
          </div>
            <div className={styles.aboutItemText}>
               <h3>Web Development</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur!
              </p>
            </div>
          </main>
          <main className={styles.aboutItem}>
             <div style={{textAlign: 'center',color: '#0163d2'}}>
             <FaMobile  size={50}/>
             </div>
             <div className={styles.aboutItemText}>
               <h3>Mobile App Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur!
              </p>
            </div>
          </main>
          <main className={styles.aboutItem}>
            <div style={{textAlign: 'center', color: '#0163d2'}}>
            <MdDesignServices size={50} />
            </div>            
             <div className={styles.aboutItemText}>
               <h3>Graphic Designing</h3>
              <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, iure!
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Services
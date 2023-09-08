import React from 'react'
import './About.css'
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/Reetam-Cv.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">about Me</h2>
      <span className="section__subtitle">Hey there im a fullstack dev</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
            <Info/>

            <p className="about__description">..............</p>

            <a href={CV} className="button button--flex"></a>
          </div>
      </div>
    </section>
  )
}

export default About
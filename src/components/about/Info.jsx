import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1year of experience</span>
      </div>

      <div className="about__box">
      <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5-project</span>
      </div>

      <div className="about__box">
      <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">support</h3>
        <span className="about__subtitle">24/7</span>
      </div>
    </div>
  )
}

export default Info
import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"></h3>
                </div>

                <span className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>
                        <h3 className="services__model-title"></h3>
                        <p className="services__modal-description">something somthing</p>

                        <ul className="services__modal-services-grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I am a fullstack Developer</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services
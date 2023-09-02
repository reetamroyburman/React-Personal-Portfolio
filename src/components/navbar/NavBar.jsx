import React from 'react'
import './NavBar.css';
const navbar = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav__logo'>Reetam</a>

        <div className='nav__menu'>
            <ul className='nav__list grid'>
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uli uil-estate nav__icon"></i> Home
                    </a>
                </li>


                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uli uil-user nav__icon"></i> About
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uli uil-file-alt nav__icon"></i> Skills
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uli uil-briefcase-alt nav__icon"></i> Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uli uil-secnery nav__icon"></i> Porfolio
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uli uil-message nav__icon"></i>Contact
                    </a>
                </li>
            </ul>

            <i class='uil uil-times nav__close'></i>

        </div>

        <div className="nav__toggle">
             <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default navbar
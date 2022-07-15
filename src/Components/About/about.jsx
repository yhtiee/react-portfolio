import React from 'react'
import './about.css'
import ME from "../../Assets/personalpic.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5 id='h5'> Get To Know</h5>
      <h2 id='h2'> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="abpout__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Profjects</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui vero reprehenderit ipsam ab ullam illum mollitia? Saepe hic sapiente, voluptatum, quaerat incidunt iusto officia quisquam, deserunt velit sunt omnis!</p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
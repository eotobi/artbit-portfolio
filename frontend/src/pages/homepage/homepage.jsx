import React from 'react'
import Sidebar from '../widgets/sidebar/sidebar';
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import NavbarSimple from '../widgets/navbar/navbarsimple';
import './homepage.scss'

function Homepage() {
  return (
    <div className='mainhome'>
      <div className="home-sidebar">
        <Sidebar/>
      </div>
      <div className="home-content">
        <div className="home-title">
          <div className="intro-title">
            <h1>Hi,</h1>
            <h1>I'm Elisha,</h1>
            <h1> Fullstack Web and Mobile Developer</h1>
            <div className="skills">React JS / Python Django / Flutter / Kotlin / Freelancer</div>
            <div className='contact-btn'>Contact Me</div>
          </div>
          <div className="social-media">
            <div className="fb">
              <FacebookIcon className="fb-icon"/>
              <h6>Facebook</h6>
            </div>
            <div className="fb">
              <GitHubIcon className="git-icon"/>
              <h6>GitHub</h6>
            </div>
            <div className="fb">
              <TwitterIcon className="twt-icon"/>
              <h6>Twitter</h6>
            </div>
            <div className="fb">
              <LinkedInIcon className="lnkd-icon"/>
              <h6>LinkedIn</h6>
            </div>
          </div>
        </div>
        <div className="details-and-navlink">
          <div className="home-navbar">
            <NavbarSimple/>
          </div>
          <div className="details-card">
            <div className="image-details">
              <img src={process.env.PUBLIC_URL + '/mylogo.svg'} alt=""/>
              <div className='details'>
              I design and create modern, user-oriented, attractive UX 
              and develop secure, scalable and efficient backends.
            </div>
            </div>
            <pre className='code'>
              {
              `
    @Composable
    fun Greeting(name: String) {
        Text(text = "Hello $name!")
    }

    @Preview(showBackground = true)
    @Composable
    fun DefaultPreview() {
        JetpackComposeTheme {
            Greeting("World")
        }
    }

              `
              }
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage
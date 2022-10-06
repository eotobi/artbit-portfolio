import React from 'react'
import Sidebar from '../widgets/sidebar/sidebar'
import NavbarSimple from '../widgets/navbar/navbarsimple'
import SkillsChart from '../charts/skillschart'
import "./profilepage.scss"

function Profilepage() {
  return (
    <div className="profile-page">
        <div className="sidebar-profile">
          <Sidebar/>
        </div>
          <div className="navbar-content">
            <div className="simple-navbar">
              <NavbarSimple/>
            </div>
            <hr/>
            <div className="content">
              <div className="developer-profile">
              <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt=""/>
              <div className="profile-story">
                <h3>Profile</h3>
                <div className="about-me">
                    <p>
                      A detail and goal-oriented Software Engineer with arsenal of knowledge and experience in Android and Web Applications development.
                    </p>
                    <p>
                      Education and employment experience has taken me to heights of research and depths of knowledge exploration in various fields of software engineering.
                    </p>
                    <p>
                      The fields include Web Application development, Mobile applications development, Data Science, Automation, Desktop Applications development, Machine Learning, Database Technologies, creation of Micro Web Services and Restful APIs. 
                    </p>
                    <p>
                    Under the belt I boast deep understanding and experience in use of the Python Django and Django Rest Frameworks with Postgress and SQLite databases.  Also I can employ various web technologies like as Html, CSS, JavaScript, React JS, SASS and Bootstrap in developing modern, fluid, responsive and fast user interfaces. 
                    </p>
                    <p>
                    Starting out with Java and gradually adapting to Kotlin and Flutter then finally Jetpack Compose, I have vast understanding of the mobile application architecture as I have developed many mobile applications (cross platform and android) with stated technologies.
                    </p>
                </div>
              </div>
              </div>
              <div className="developer-content">
                <div className="first-row">
                  <div className="col-1">
                    <h2>Name</h2>
                    <span>Elisha Osotsi Otobi</span>
                  </div>
                  <div className="col-1">
                    <h2>Company</h2>
                    <span>ArtbitApps | Selecta One Kenya</span>
                  </div>
                  <div className="col-1">
                    <h2>Title</h2>
                    <span>Software Engineer | Data Analyst</span>
                  </div>
                </div>
                <div className="first-row">
                  <div className="col-1">
                    <h2>Education</h2>
                    <span>Bachelors Information Technology, </span>
                  </div>
                  <div className="col-1">
                    <h2>Institution</h2>
                    <span>Masinde Muliro University of Science and Technology</span>
                  </div>
                </div>
                <div className="first-row">
                  <div className="col-1">
                    <h2>Certifications</h2>
                    <span>Python - Cisco, React JS - Udemy, Web Development - W3 Schools</span>
                  </div>
                </div>
                <div className="first-row">
                  <div className="col-1">
                    <h2>Skills</h2>
                      <div className="skills-chart">
                        <SkillsChart/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Profilepage
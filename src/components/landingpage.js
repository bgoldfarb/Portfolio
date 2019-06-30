import React, { Component } from 'react'
import profile from './images/brian.PNG'
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%',margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src={profile}alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>
                        <p>JavaScript | Node.js | Java | Python | React.js | Express.js</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/brian-goldfarb-537a2260/" target="_blank" rel= "noopener noreferrer">
                              <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/bgoldfarb" target="_blank" rel= "noopener noreferrer">
                              <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
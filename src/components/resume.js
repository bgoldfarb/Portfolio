import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <h2 style={{paddingTop: '2em'}}> Brian Goldfarb</h2>
                    <h4 style={{color: 'grey'}}> Full Stack Developer </h4>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p> More Description goes here</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Location</h5>
                    <p> Columbus, OH 43220</p>
                    <h5>Phone</h5>
                    <p>732-685-2777</p>
                    <h5>Email</h5>
                    <p>bgoldr93@gmail.com</p>

                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2011}
                        endYear={2017}
                        schoolName="The Ohio State University"
                        major = "Computer Engineering"
                        />
                        <hr style={{borderTop:'3px solid'}} />
                        <h2>Experience</h2>
                        <Experience
                        startYear="June 2017"
                        endYear="Present"
                        jobName="Software Engineer II"
                        description="Gap Inc."
                        />
                        <Experience
                        startYear="June 2016"
                        endYear="August 2016"
                        jobName="Software Engineering Intern"
                        description="Gap Inc."
                        />
                        <Experience
                        startYear="June 2015"
                        endYear="Jan 2016"
                        jobName="Technical Intern"
                        description="NuGrowth Solutions"
                        />
                        <hr style={{borderTop:'3px solid'}} />
                        <h2>Skills</h2>
                        <Skills 
                        skill="JavaScript"
                        progress={100}
                        />
                        <Skills 
                        skill="Node.js"
                        progress={100}
                        />
                        <Skills 
                        skill="React.js"
                        progress={50}
                        />
                        <Skills 
                        skill="Express.js"
                        progress={50}
                        />
                        <Skills 
                        skill="Python"
                        progress={50}
                        />
                        <Skills 
                        skill="Java"
                        progress={50}
                        />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume
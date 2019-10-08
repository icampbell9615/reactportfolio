import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';


class Resume extends Component {
  render() {
    return (
  
      <div>
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src=""
                alt=""
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Ian Campbell</h2>
            <h4 style={{ color: 'grey' }}>Software Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Anchoring Junior Full-Stack Web Developer fluent in React, Databases, HTML5, CSS, JavaScript. Professional focal points include marketing, data analysis, social media management, legal research, data entry, accounting, complex problem-solving, client relationship management, and project management. Delivering superior administration on the latter areas of expertise requires utilization of effective communication and negotiation skills, as well as business acumen, systems analysis, and resource management to support efficiency and maximum returns.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Vanderbilt"
              schoolDescription="Vanderbilt/Trilogy Coding Bootcamp: MERN STACK, MySQL"
            />
            <Education
              startYear={2015}
              endYear={2017}
              schoolName="Full Sail University"
              schoolDescription="Music Business Bachelor's of Science"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Research/Runner"
              jobDescription="Frazer L.L.C."
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Marketing Intern"
              jobDescription="International Songwriting Competition"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="Javascript"
              progress={60}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={60}
            />
            <Skills
              skill="React"
              progress={50}
            />
          </Cell>
        </Grid>
       
      </div>
        
         
    )
  }
}


export default Resume;
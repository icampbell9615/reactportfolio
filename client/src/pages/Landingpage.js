import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

const styles = {
    root: {
        width: '100%',
        height: '100%',
        margin: 'auto'
    }
}



class Landingpage extends Component {
    render() {
        return(
            <div style= {styles.root}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.ibb.co/KrqB4yG/721-A9720-copy-2.png"
                        alt="avatar"
                        className="avatar-img" /> 

                        <div className="banner-text">
                            <h1>Ian Campbell<br></br>Full Stack Web Developer</h1>
                           
                            <hr/>

                        <p>HTML/CSS | SQL | Bootstrap | Javascript | React <br></br> React Native | NodeJS | Express | MongoDB</p>
                        
                        <div className="social-links">

                               {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/iancampbell95/" rel="noopener noreferrer" target="_black">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* LinkedIn */}
                            <a href="https://github.com/icampbell9615" rel="noopener noreferrer" target="_black">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            <a href="https://www.instagram.com/thesunshinehandler" rel="noopener noreferrer" target="_black">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                     

 
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    } 
}

export default Landingpage;
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Landingpage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from "./Projects";
import Resume from "./Resume";

// Setting all routes


class Main extends Component {
    render() {
    return (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Aboutme" component={Aboutme}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
    </Switch>
    )
}
}
export default Main;
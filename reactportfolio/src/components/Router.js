import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/Landingpage';
import Aboutme from '../pages/Aboutme';
import Contact from '../pages/Contact';
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

// Setting all routes


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/Aboutme" component={Aboutme} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Resume" component={Resume} />
            </Switch>
        )
    }
}
export default Main;
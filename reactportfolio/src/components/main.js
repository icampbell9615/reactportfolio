import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Landingpage';
import Aboutme from './Aboutme';
import Contact from './Contact';

const Main = () => {
    return (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Aboutme" component={Aboutme}/>
        <Route path="/Contact" component={Contact}/>
    </Switch>
    )
}

export default Main;
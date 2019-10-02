import React from 'react';
import LandingPage from './landingpage';


const Main = () => {
    <Switch>
        <Route exact path="/" component={LandingPage}/>
    </Switch>
}

export default Main;
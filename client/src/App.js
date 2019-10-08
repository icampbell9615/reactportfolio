import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation} from 'react-mdl';
import Routes from './components/Router';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Layout fixedHeader>
            <Header className="header-color" title="Menu" scroll>
              <Nav />
            </Header>

            <div className="page-content" >
              <Routes />
            </div>

          </Layout>
        </div >
      </Router>


    );
  }
}

function Nav() {
  return (
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/Aboutme">Projects</Link>
    
      <Link to="/Contact">Contact</Link>
    </Navigation>
  )
}

export default App;

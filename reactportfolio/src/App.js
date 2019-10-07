import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation,  Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
class App extends Component {
  
  render() {
  return (
      
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title="Menu" scroll>
        <Navigation>
<Link to="/">Home</Link>
<Link to="/Resume">Resume</Link>
<Link to="/Aboutme">Projects</Link>
{/* <Link to="/Projects">About me</Link> */}
<Link to="/Contact">Contact</Link>
</Navigation>
</Header>


   
        <Content>
            <div className="page-content"/>
            <Main/>
        </Content>

    </Layout>
</div>


  );
}
}

export default App;

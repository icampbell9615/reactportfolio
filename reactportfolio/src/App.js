import React, {Component} from 'react';
import './App.css';
import {Layout, Header, HeaderRow, Tab, HeaderTabs, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
class App extends Component {
  render() {
  return (
      

     <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header className="header-color" title="Title" scroll>
           
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
           
                <Tab><Link to="/Landingpage">Landing Page</Link></Tab>
                <Tab><Link to="/Aboutme">Aboutme</Link></Tab>
                <Tab><Link to="/Contact">Contact</Link></Tab>
               
            </HeaderTabs>
       
        </Header>
        <Content>
            <Main/>
        </Content>
    </Layout>
    </div>
  );
}
}

export default App;

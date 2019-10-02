import React, {Component} from 'react';
import './App.css';
import {Layout, Header, HeaderRow, Navigation, Tab, HeaderTabs, Drawer, Content} from 'react-mdl';
import Main from './components/main';
class App extends Component {
  render() {
  return (

     <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Title" />
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
              <Navigation>
                <Tab><a href="/">Link</a></Tab>
                <Tab><a href="/">Link</a></Tab>
                <Tab><a href="/">Link</a></Tab>
                </Navigation>
            </HeaderTabs>
       
        </Header>
        <Drawer title="Title" />
        <Content>
            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
            <Main/>
        </Content>
    </Layout>
    </div>
  );
}
}

export default App;

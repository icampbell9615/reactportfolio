import React, { Component } from 'react';
import { Tabs, Card, CardTitle, IconButton, CardActions, CardText, Button, Tab } from 'react-mdl';
class Aboutme extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ width: '450px', height: '320px', margin: 'auto', position: 'fixed' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://i.ibb.co/DbXqHG6/Screen-Shot-2019-10-08-at-3-47-25-PM.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Top Five Music App
        </CardText>
                    <CardActions border>
                        <Button colored>View Code </Button>
                        <IconButton name="share" a href="https://github.com/icampbell9615/Project_1_Music.io" />
                    </CardActions>
                </Card>



            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ width: '450px', height: '320px', margin: 'auto', position: 'fixed' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://i.ibb.co/d7k6Vm3/Screen-Shot-2019-10-08-at-3-51-48-PM.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                       Ian Campbell's Digital Portfolio
        </CardText>
                    <CardActions border>
                        <Button colored>View Code</Button>
                        <IconButton name="share" a href="https://github.com/icampbell9615/reactportfolio" />
                    </CardActions>
                </Card>

            )
        } else if (this.state.activeTab === 2)
            return (
                <div><h1>This is VueJS</h1></div>
            )
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                    <Tab>Apps</Tab>
                    <Tab>Websites</Tab>
                </Tabs>

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>



        );
    }
}

export default Aboutme;
import React, {Component} from 'react';
import {Tabs, Card, CardTitle, IconButton, CardActions, CardText, Button, Tab} from 'react-mdl';
class Aboutme extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
toggleCategories() {   if(this.state.activeTab === 0){
    return(
        <Card shadow={5} style={{width: '450px', height: '320px', margin: 'auto', position:'fixed'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </CardText>
        <CardActions border>
            <Button colored>View spp</Button>
            <IconButton name="share"/>
        </CardActions>
    </Card>
    
    
   
    )
} else if(this.state.activeTab === 1) {
    return (
        <Card shadow={5} style={{width: '450px', height: '320px', margin: 'auto', position:'fixed'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </CardText>
        <CardActions border>
            <Button colored>View Updates</Button>
            <IconButton name="share"/>
        </CardActions>
    </Card>
    
    )
} else if(this.state.activeTab === 2)
return  (
    <div><h1>This is VueJS</h1></div>
)}
 

    render() {
        return(
<div className="category-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
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
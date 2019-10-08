import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Grid, List, ListItem, Cell, ListItemContent} from 'react-mdl';

class Contact extends Component {
constructor(){
  super()

  this.state = {
    name: '',
    email: '',
    message: ''

  }

  this.handleChange = this.handleChange.bind(this)

}
handleChange = e => {
  this.setState({ [e.target.name]: e.target.value})
}

// handleSubmit(e){
//   e.preventDefault()
//   const{name,email,message} = this.state
// }

    render() {
        return(

        <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ian Campbell</h2>
           
             <p style={{ top: 'fixed', margin: 'auto', paddingTop: '1em'}}>Thank you for visitng my portfolio <br></br> I look forward to hearing from you soon</p>
          
          <Form style ={{ width: '600px'}}>
          <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text"
          name="name"
          onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="email"
          name="email"
          onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
          <Label for="message">Message:</Label>
          <Input type="textarea"
          name="message"
          onChange={this.handleChange}/>
          </FormGroup>

          <Button>Submit</Button>
          </Form>
          
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (980) 230-9615
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    icampbell9615@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
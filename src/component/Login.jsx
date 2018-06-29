import React from 'react';
import { Form, FormGroup, Label, Input, Button,Row,Col } from 'reactstrap';
import './Login.css'

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      redirect:false,
    };
    this.handlechange=this.handlechange.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);
  }

  handlechange(e) {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value
      });
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      });
    } else {
     
    }
  }

  handlesubmit(e){
    console.log("submitted");
    this.setState({username:'',password:''});
  }

  render() {
    return (
      <Row className="container  mx-0 d-flex align-itmes-center justify-content-center" id="loginmainpart">
      <Col sm={8} >
        <Form >
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="username" id="Email" placeholder="enter your email" value={this.state.username} onChange={this.handlechange}/>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="enter your password"value={this.state.password} onChange={this.handlechange} />
          </FormGroup>
          <a rol="button"className="btn btn-block btn-primary" onClick={this.handlesubmit}>Login</a>
        </Form>       
      </Col>
      </Row>
    );

    
  }
}
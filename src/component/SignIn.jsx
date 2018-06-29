import React from 'react';
import { Form, FormGroup, Label, Input, Button,Row,Col } from 'reactstrap';
import './SignIn.css'

export default class SignIn extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      school:'',
      email:'',
      leetcodelink:'',
      githublink:'',
      bloglink:'',
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
    } else if (e.target.name === "school") {
      this.setState({
        school: e.target.value
      });
    } else if (e.target.name === "email") {
      this.setState({
        email: e.target.value
      });
    } else if (e.target.name === "leetcodelink") {
      this.setState({
        leetcodelink: e.target.value
      });
    } else if (e.target.name === "githublink") {
      this.setState({
        githublink: e.target.value
      });
    } else if (e.target.name === "bloglink") {
      this.setState({
        bloglink: e.target.value
      });
    }

  }

  handlesubmit(e){
    console.log("submitted");
    this.setState({      
      username:'',
      password:'',
      school:'',
      email:'',
      leetcodelink:'',
      githublink:'',
      bloglink:'',
      redirect:false,});
  }

  render() {
    return (
      <Row className="container  mx-0 d-flex align-itmes-center justify-content-center" id="signinmainpart">
        <Form>
          <FormGroup>
            <Label >Username</Label>
            <Input type="txt" name="username"  placeholder="Username" value={this.state.username} onChange={this.handlechange}/>
          </FormGroup>
          <FormGroup>
            <Label >Password</Label>
            <Input type="password" name="password" placeholder="Password"value={this.state.password} onChange={this.handlechange} />
          </FormGroup>
          <FormGroup>
            <Label >School</Label>
            <Input type="password" name="school"  placeholder="School Name"value={this.state.school} onChange={this.handlechange} />
          </FormGroup>          
       
        <Form inline className='mb-5 mt-5 d-flex justify-content-between' >
          <FormGroup >
            <Label className="mr-sm-2">Email</Label>
            <Input type="email" name="email" placeholder="something@mail.com" value={this.state.email} onChange={this.handlechange}/>
          </FormGroup>
          <FormGroup >
            <Label  className="mr-sm-2">Leetcode Link</Label>
            <Input type="txt" name="leetcodelink"  placeholder="leetcode Link" value={this.state.leetcodelink} onChange={this.handlechange}/>
          </FormGroup>
        </Form>
        <Form inline className='mb-5' className="d-flex justify-content-between">

          <FormGroup >
            <Label className="mr-sm-2">Blog</Label>
            <Input type="txt" name="bloglink"  placeholder="Blog Link" value={this.state.bloglink} onChange={this.handlechange}/>
          </FormGroup>
          <FormGroup >
            <Label className="mr-sm-3">Github Link</Label>
            <Input type="email" name="githublink"  placeholder="something@github.com" value={this.state.githublink} onChange={this.handlechange}/>
          </FormGroup>
        </Form>
        <a rol="button"className="btn btn-block btn-success mt-5" onClick={this.handlesubmit}>Sign In</a>
      </Form>   
      </Row>
    );

    
  }
}


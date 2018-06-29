import React from 'react';
import {FormGroup,Input,Row,Col,Button} from 'reactstrap';
import './NewPost.css'

export default class NewPost extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:this.props.post? this.props.post.title:'',
      content:this.props.post? this.props.post.content:'',
     
    };
    this.handlechange=this.handlechange.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);
  }

  handlechange(e) {
    if (e.target.name === "title") {
      this.setState({
        title: e.target.value
      });
    } else if (e.target.name === "content") {
      this.setState({
        content: e.target.value
      });
    } else {
     
    }
  }

  handlesubmit(e){
    
    let date=new Date().toLocaleDateString();;
    let newpost={...this.state,lastReply:date};
    console.log(newpost);
    this.props.Save(newpost);
    this.props.Cancel();
    this.setState({title:'',content:''});
  }

  render() {
  	let {Save ,Cancel}=this.props;
    return (
     <div className="newpost py-5">
        <div className="container">
          <Row className="d-flex flex-row-reverse justify-content-between pb-5" id="row">
            <Col sm={4} className='d-flex '>
            	<button type="button" class="btn btn-secondary btn-block " onClick={Cancel}>Cancel</button>
            	<button type="button" class="btn btn-primary btn-block b-0 m-0" onClick={this.handlesubmit}>Save</button>          	
            </Col>
            <Col sm={6}>
            	<Input type="text"  name="title" id="title" placeholder="enter the title" value={this.state.title} onChange={this.handlechange}/>
            </Col>

          </Row>
          <FormGroup>
            <Input type="textarea" name="content" id="content" placeholder="enter the content"value={this.state.content} onChange={this.handlechange} />
          </FormGroup>
          
        </div>       
      </div>
    );
   }

}

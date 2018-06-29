import React from 'react';
import {Row ,Col } from 'reactstrap';
import './PostDetailContent.css'
export default class PostDetailContent extends React.Component{
	render(){
		let {post}=this.props;
		return(
			<Row className="d-flex">
			 <Col sm={1} className="border-right ">
{/*			 	<div className="vertivalword">
			 		Content
			 	</div>*/}
			 </Col>
			 <Col sm={11} className=" p-4  ">
			 	<div className="postdetailcontent p-3">
			 		{post.content}
			 	</div>
			 </Col>
			</Row>
		)
	}
} 
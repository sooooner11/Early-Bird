import React from 'react';
import {Container, Row ,Col } from 'reactstrap';
import Anonymous from '../images/Anonymous.png';
import './PostItem.css'

export default class PostItem extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            src: this.props.post.author.image ? this.props.post.src.author.image : Anonymous,
        }
        this.handleImageErrored=this.handleImageErrored.bind(this);
    }

    handleImageErrored(){
    	this.setState({src:Anonymous});
    }

	render(){
		let {post}=this.props;
		return(
			<div className="PostItem">
				<Row className='mx-2 py-3 shadowbottom'>
					<Col sm={10} className="d-flex align-items-center">
						<img src={this.state.src}  className="rounded-circle " id="imageconstrain" onError={this.handleImageErrored}/>
						<div className="mx-3">
							<h5>{post.title}</h5>
							<div className='d-flex'>
								created at: {post.date} || Last Reply: {post.lastReply}
							</div>
						</div>
					</Col>
					<Col sm={2} className="d-flex justify-content-between">
						<div className="d-flex flex-column align-items-center">
							<div > Votes</div>
							<div className="bluetext">{post.votes}</div>
						</div>
						<div className="d-flex flex-column align-items-center">
							<div > Views</div>
							<div className="bluetext">{post.views}</div>
						</div>
						
					</Col>

				</Row>
			</div>

		)
	}
}
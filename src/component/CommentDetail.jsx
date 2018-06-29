import React from 'react';
import Anonymous from '../images/Anonymous.png';
import {Input }from 'reactstrap';
import Clock from 'react-icons/lib/fa/clock-o';
import Thumb from 'react-icons/lib/fa/thumbs-up';

export default class CommentDetail extends React.Component{
	constructor(props){
		super(props);

		this.state={
			vote:true,
			comment:this.props.comment,
		}
		
		this.handleVote=this.handleVote.bind(this);
	}

	handleVote(){
		if(this.state.vote){
			let newcomment=Object.assign({},this.props.comment,{votes:this.props.comment.votes+1});
			this.props.updateComment(newcomment);
			this.setState({
				vote:false,
				comment:newcomment,
			})
		}
	}

	render(){
		let {comment} =this.state;
		return(
		
			<div className='row  py-3 pr-3'>
				<div className="col-sm-1 d-flex flex-row-reverse align-items-center ">
					<img src={Anonymous}  className="rounded-circle " id="imageconstrain" />
				</div>
					
				<div className="col-sm-10 pl-0">
					<div className='d-flex '>
						<div className="pr-3 commentauthor">
							{comment.author}
						</div>
						<div>
							<Clock/>{comment.date}
						</div>
					</div>
					<div>{comment.content}</div>
					<div className="d-flex align-items-center btn nondecoration pl-0" onClick={this.handleVote}>
					    <Thumb />
						<div className="pl-1">{comment.votes}</div>
					</div>
				</div>


			</div>

			
		)
	}
}
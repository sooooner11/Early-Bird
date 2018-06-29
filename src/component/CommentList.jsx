import React from 'react';
import CommentDetail from './CommentDetail.jsx'
import './CommentList.css'
import Dropdown from './Dropdown.jsx'
import Newcomment from '../images/newcomment.png'
import {Input }from 'reactstrap';
import Anonymous from '../images/Anonymous.png';
import {vote ,oldest,newest} from '../methods/Comparator.js'

export default class CommentList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
           newcomment:'',
           comments:this.props.comments,
        }
		
		this.handleSort=this.handleSort.bind(this);
		this.handlechange=this.handlechange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	handlechange(e){
		this.setState({newcomment:e.target.value});
	}

	handleSubmit(e){
		
		this.props.onSubmit(this.state.newcomment);
		this.setState({
			newcomment:'',
		})
	}

	handleSort(filter){
		
		var comparator=vote;
		if(filter==='Newest'){
			comparator=newest;
		}
		else if(filter==='Oldest'){
			comparator=oldest;
		}

		let comments=this.state.comments.slice(0);
		comments.sort(comparator);
		this.setState({
			comments:comments,
		})
	}
	render(){
		let {editable,onSubmit} =this.props;
		let {comments} =this.state;
		let commentnumber=comments.length;
		let choseitem=['Most Vote','Newest','Oldest'];

		return(
			<div className="commentlist py-3">
				<div className="d-flex justify-content-between commentlist-topleft">
					<div>
						Comments: <span className="badge badge-pill badge-info"> {commentnumber}</span>
					</div>
					<div>
						<Dropdown Sort={this.handleSort} items={choseitem}/>
					</div>
				</div>
				{
					editable?(
						<div className='row  py-3 pr-3'>
							<div className="col-sm-1 d-flex flex-row-reverse align-items-center ">
								<img src={Anonymous}  className="rounded-circle " id="imageconstrain" />
							</div>
					
							<div className="col-sm-10 pl-0">
								<Input type='textarea' placeholder='enter your comment:' value={this.state.newcomment} className="textarea" onChange={this.handlechange}/>
								<div className="d-flex">
									<button className="btn btn-outline-success btn-block mt-1" onClick={this.handleSubmit}>Submit</button>
									<button className="btn btn-outline-danger btn-block mt-1">Cancle</button>
								</div>
							</div>	
						</div>
					):null
				}


		   	{ 
			  comments.map(comment=>(<CommentDetail key={comment.commentId} comment={comment} updateComment={this.props.updateComment}/>))

			}
			
			</div>
		)
	}

}
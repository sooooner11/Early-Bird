import React from 'react';
import {Input,Button} from 'reactstrap';
import Plus from 'react-icons/lib/fa/plus';
import Dropdown from'./Dropdown'
import './PostsListTop.css'

export default class PostsListTop extends React.Component{
	constructor(props){
		super(props);
		this.state={
			search:'',
			sort:'',
			
		};
		this.handleOnchange=this.handleOnchange.bind(this);
		
		this.keypress=this.keypress.bind(this);
	
	}
	keypress(e){
		if(e.which===13){
			this.props.Search(e.target.value);
			this.setState({search:''});
	   }
	}

	handleOnchange(e){
		this.setState({search:e.target.value});
	}



	render(){
		let {Sort,Search,NewPost}=this.props;
		let items=['Most Vote','Most View','Oldest','Newest']

		return(
			<div className="shadowLine PostsListTop pt-3" style={this.props.style}>
				
				<div className="d-flex justify-content-between">
					<div >
						<Input type="text" onChange={this.handleOnchange} placeholder="blog title to search ......" value={this.state.search} onKeyPress={this.keypress}/>
					</div>
					<div className="d-flex align-items-center">
						<Button color='success' onClick={NewPost} className="mr-3 btn-small"> New<Plus/> </Button>
						<Dropdown Sort={Sort} items={items}/>
					</div>
				</div>
			</div>

		)

	}
	

}
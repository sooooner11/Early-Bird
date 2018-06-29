import React, { Component } from "react";
import PostsView from "./PostsView";
/*import PostEditor from "./PostEditor";*/
import Posts from '../data/Posts.js';
import {Container, Row,Col ,Table} from 'reactstrap';
import './PostsList.css'
import PostsListTop from './PostsListTop';
import { StickyContainer, Sticky } from 'react-sticky';
import NewPost from './NewPost.jsx'
import {vote ,oldest,newest,view} from '../methods/Comparator.js'



export default class PostsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: false
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.refreshPostList = this.refreshPostList.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.handleSort=this.handleSort.bind(this);
  }

  componentDidMount() {
    this.refreshPostList();
  }
  
  // 获取帖子列表
  refreshPostList() {
    // 调用后台API获取列表数据，并将返回的数据设置到state中
    //*******************************************************************

    this.setState({
    	posts:Posts,
    	newPost:false
    })
  }
  
  // 保存帖子
  handleSave(data) {
  	//********************************************************************
    // 当前登录用户的信息和默认的点赞数，同帖子的标题和内容，共同构成最终待保存的帖子对象
    //还有时间和reply时间没有确认
    const date=new Date().toLocaleDateString();
    const postData = { ...data, author: this.props.userId, votes: 0 ,views:0 ,date:date};

    console.log(postData);
  }
  
  // 取消新建帖子
  handleCancel() {
    this.setState({
      newPost: false
    });
  }
  
  // 新建帖子 打开新建帖子的下拉框
  handleNewPost() {
  	this.setState({newPost:true});

  }

  //需要将title传输给服务器***********************************************
  handleSearch(title){
  	console.log(title);
  }

  //需要排序*************************************************************
  handleSort(filter){
  	
 		var comparator=vote;
		if(filter==='Newest'){
			comparator=newest;
		}
		else if(filter==='Oldest'){
			comparator=oldest;
		}
		else if(filter==='Most View'){
			comparator=view;
		}
		let posts=this.state.posts.slice(0);
		posts.sort(comparator);
		this.setState({
			posts:posts,
		})
  }

	render(){
		let {posts}=this.state;
		return (
			<Container className="postsmainpart">
				<Row>
					<Col md={10} className="boxshadowposts py-2">
			             <StickyContainer className="StickyContainer">
			             	<h3 className="d-flex justify-content-center"> Blog List</h3>
				              <Sticky >
				                {
				                  ({style,}) => {
				                    return (
				                        <PostsListTop  style={style} Sort={this.handleSort} Search={this.handleSearch} NewPost={this.handleNewPost}/>
				                    )
				                  }
				                }
				              </Sticky>
							  <PostsView posts={posts} className='PostsView'></PostsView>
			            </StickyContainer>
					</Col>
					<Col md={2}>
					</Col>
				</Row>
				{this.state.newPost? <NewPost Save={this.handleSave} Cancel={this.handleCancel} />:null}
			</Container>

		)
	}
}



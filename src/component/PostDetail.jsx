import React, { Component } from "react";
import NewPost from "./NewPost.jsx";

import Posts from '../data/Posts.js';
import Comments from '../data/Comments.js';

import PostItem from './PostItem.jsx';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from "react-router-dom";
import Back from 'react-icons/lib/fa/angle-double-left';
import Like from 'react-icons/lib/fa/thumbs-up';
import PostDetailContent from './PostDetailContent.jsx'
import CommentList  from './CommentList.jsx';


import "./PostDetail.css";



class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      editing: false,
      vote:false,             
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handlePostSave = this.handlePostSave.bind(this);
    this.handlePostCancel = this.handlePostCancel.bind(this);
    this.refreshComments = this.refreshComments.bind(this);
    this.refreshPost = this.refreshPost.bind(this);
    this.handleVote=this.handleVote.bind(this);
    this.updateComment=this.updateComment.bind(this);
  }

  componentDidMount() {
    this.refreshComments();
    this.refreshPost();
  }

  // 获取帖子详情 **************************************************************
  refreshPost() {
    const postId = this.props.match.params.id;
/*    get(url.getPostById(postId)).then(data => {
      if (!data.error && data.length === 1) {
        this.setState({
          post: data[0]
        });
      }
    });*/

    let post=Posts.filter(item=> item.postId==postId).shift();
   	this.setState({
   		post:post,
   	})

  }

  // 获取评论列表****************************************************************
  refreshComments() {
    const postId = this.props.match.params.id;
/*    get(url.getCommentList(postId)).then(data => {
      if (!data.error) {
        this.setState({
          comments: data
        });
      }
    });*/
    this.setState({
    	comments:Comments,
    })
  }

  // 让帖子处于编辑态
  handleEditClick() {
    this.setState({
      editing: true
    });
  }

  //给帖子点赞
  handleVote(){
  	if(!this.state.vote){
	  	const votenumber=this.state.post.votes+1;
	  	console.log(votenumber);
	  	this.handlePostSave({votes:votenumber});
	  	this.setState({vote:true})
  	}
  }

  // 保存帖子
  handlePostSave(data) {
    const id = this.props.match.params.id;
    this.savePost(id, data);
    

  }

  // 取消编辑帖子
  handlePostCancel() {
    this.setState({
      editing: false
    });
    
  }

  // 提交新建的评论
  handleCommentSubmit(content) {
    const postId = this.props.match.params.id;
    const date=new Date().toLocaleString();
    const comment = {
      authorId: this.props.userId,
      postId: postId,
      content: content,
      votes:0,
      date:date,
      author:'Jerry'        //测试阶段定死了author
    };
    this.saveComment(comment);
  }

  // 保存新的评论到服务器*******************************************************
  saveComment(comment) {
     let comments=this.state.comments;
     comments.push(comment);
     this.setState({
     	comments:comments,
     }
     )

  }

  updateComment(comment){
  	//根据comment.commentId可以修改comment

  }

  // 同步帖子的修改到服务器*********************************************************
  savePost(id, post) {
  	//根据id从服务器得到完整的post信息，然后再更改帖子的 content，title和lastEditData。其他的信息可以不改
  	//post 参数就是需要改变的信息量
  	//这个save只是修改，不是创建


   const newPost=Object.assign({},this.state.post,post);
    // let newPost= 从服务器跟新post，然后得到post的具体信息
     console.log(newPost);
    this.setState({
        post: newPost,
        editing: false
    });
  
   
    

  }

  render() {
  	
    const { post, comments, editing } = this.state;
    const { userId } = this.props;
    if (!post) {
      return null;
    }
    const editable = userId === post.author.id;
    return (
      <div className="postdetail">
        {editing ? (
          <NewPost
            post={post}
            Save={this.handlePostSave}
            Cancel={this.handlePostCancel}
          />
        ) : null}

        <div className='container boxshadowposts my-5'>
			<StickyContainer >
			             	
				<Sticky >
				    {
				        ({style}) => {
				        return (
				           <PostItemTop  style={style} post={post} editable={editable} toedit={this.handleEditClick} vote={this.handleVote}/>
				        )
				        }
				    }
				</Sticky>

				<PostItem
		            post={post}
		            editable={editable}
		            onEditClick={this.handleEditClick}
		        />
		        <PostDetailContent post={post}/>
			</StickyContainer>        	

	       
	       <CommentList
	          comments={comments}
	          editable={Boolean(userId)}
	          onSubmit={this.handleCommentSubmit}
	          updateComment={this.updateComment}
	        />

	    </div>
      </div>
    );
  }
}

export default PostDetail;



class PostItemTop extends React.Component{
	render(){
		let {post,style,editable,toedit,vote}=this.props;
		return(
			<div style={style} className="d-flex justify-content-between align-items-center postitemtop p-3 ml-1 row">
				<div className="postitemtoptitle col-sm-9">
					Title: {post.title} {editable? <span className="btn btn-outline-success btn-samll" onClick={toedit}> Edit </span> :null }
				</div>
				<div className="d-flex postitemtopicon col-sm-3 justify-content-between">
					<Link to='/posts' className=" d-flex align-items-center postitemtopback">
						<Back/> Back 
					</Link>
					<div className="d-flex align-items-center postitemtoplike btn  btn-lg" onClick={vote}>
						<Like /> Vote
					</div>
				</div>
			</div>
		)
	}
}
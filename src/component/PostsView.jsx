import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

class PostsView extends Component {
  render() {
    const { posts } = this.props
    return (
      <div >
        {posts.map(item => (
          
          <Link key={item.postId} to={`/posts/${item.postId}`}>
             <PostItem post={item} />
          </Link>
        ))}
      </div>
    );
  }
}

export default PostsView;
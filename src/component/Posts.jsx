import React, { Component } from "react";
import { Route } from "react-router-dom";
import PostsList from "./PostsList.jsx";
import PostDetail from './PostDetail.jsx';



export default class Posts extends Component {

  render() {
    let {match} =this.props;
    return (
      <div>
        <Route
          path={match.url}
          exact
          render={props => <PostsList userId={1} {...props} />}
        />
        <Route
          path={`${match.url}/:id`}
          render={props => <PostDetail userId={1} {...props} />}
        />
      </div>
    );
  }
}


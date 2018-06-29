import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from'react-router-dom';
import './App.css';
import Home from './component/Home.jsx';
import Ranking from './component/Ranking.jsx';
import Posts from './component/Posts.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Login from './component/Login.jsx';
import Signin from './component/SignIn.jsx';


class App extends Component {
  render() {
    return (
        <Router>
          <div >
            <Header />
            <Route  exact path="/" component={Home}/>
            <Route  path="/ranking" component={Ranking}/>
            <Route  path="/posts" render={props => <Posts userId={1} {...props} />}/>
            {/*<Route  path="/" render={props => <PostDetail userId={1} {...props} />}/>*/}
            <Route  path="/login" component={Login}/>
            <Route  path="/signin" component={Signin}/>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;

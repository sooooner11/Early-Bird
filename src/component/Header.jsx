import React from 'react';
import {
  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,
  UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import User from 'react-icons/lib/fa/user';
import UserPlus from 'react-icons/lib/fa/plus';
import Out from 'react-icons/lib/fa/sign-out';
import './Header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
  	const { username, onLogout, location } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">Early Bird</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >

	            <Nav className='ml-md-3' navbar>
	              <NavItem>
	                <NavLink href="/">Home</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/ranking">Ranking</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/posts">Posts</NavLink>
	              </NavItem>
	              <UncontrolledDropdown nav inNavbar>
	                <DropdownToggle nav caret>
	                  Options
	                </DropdownToggle>
	                <DropdownMenu right>
	                  <DropdownItem>
	                    Option 1
	                  </DropdownItem>
	                  <DropdownItem>
	                    Option 2
	                  </DropdownItem>
	                  <DropdownItem divider />
	                  <DropdownItem>
	                    Reset
	                  </DropdownItem>
	                </DropdownMenu>
	              </UncontrolledDropdown>
	            </Nav>
	            <Nav className="ml-md-auto mr-5" navbar>
	             {username && username.length > 0 ? (
	              <Nav navbar>
	                <NavItem  >
	                  Current User: {username}&nbsp;
	                </NavItem>
	                <NavItem >
	                  <a onClick={onLogout}>Logout <Out/></a>
	                </NavItem>
	              </Nav>
	                 ) : (
	              <NavItem>
	                <Link to={{ pathname: "/login", state: { from: location } }}>     
	                  Log In <User/>
	                </Link>
	                <Link to={{ pathname: "/signin", state: { from: location } }} className="ml-4">     
	                  Sign In <UserPlus/>
	                </Link>
	              </NavItem>
	            )}
	            </Nav>
     
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
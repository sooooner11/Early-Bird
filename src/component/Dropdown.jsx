import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle ,DropdownItem } from 'reactstrap';
import './Dropdown.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleOnClick=this.handleOnClick.bind(this);

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleOnClick(e){
    e.preventDefault();
    
    this.props.Sort(e.target.name);
  }

  render() {
    let {items} =this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret id="nobackground">
          Sort By
        </DropdownToggle>
        <DropdownMenu id="dropdownmenu">
          {
            items.map((item,id)=><DropdownItem name={item} key={id}  onClick={this.handleOnClick}>{item}</DropdownItem>)
          }
          {/*<DropdownItem name="most votes"  onClick={this.handleOnClick}>Most Votes</DropdownItem>
          <DropdownItem name="most views"  onClick={this.handleOnClick}>Most Views</DropdownItem>
          <DropdownItem name="recently"    onClick={this.handleOnClick}>Recently</DropdownItem>
          <DropdownItem name="oldest"      onClick={this.handleOnClick}>Oldest</DropdownItem>*/}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
import React,{Component} from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/"> React-Bootstrap </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
          <li role="presentation" activeclassname="active">
            <NavLink to="/" exact> Home</NavLink>
          </li>
          <li role="presentation" activeclassname="active">
            <NavLink  to="/about" exact> About</NavLink>
          </li>
        </ul>       
        <Nav pullRight>
          <NavItem eventKey={1} >
            Link Right
          </NavItem>
          <NavItem eventKey={2} >
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;
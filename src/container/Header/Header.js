import React,{Component} from 'react';
import {Navbar} from 'react-bootstrap';
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
        <ul className="nav navbar-nav navbar-right">          
          <li role="presentation" activeclassname="active">
            <NavLink to="/login" exact> Login</NavLink>
          </li>
          <li role="presentation" activeclassname="active">
            <NavLink  to="/about" exact> Registration</NavLink>
          </li>          
        </ul>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;
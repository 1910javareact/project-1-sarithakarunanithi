import React, { useState } from 'react';
import "./navbar.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ReimbursementNavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reimbursement</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem className="nav">
              <Link className="a" to='/login'>Login</Link>
            </NavItem> */}
            <NavItem className="nav">
              <Link to='/users/display/id/'>UserById</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/users/display'>Users</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/reimbursements/status/'>ReimbursementStatus</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem className="nav">
          <Link to='/login'>Login</Link>
        </NavItem>
      </Navbar>




      <br />









    </div>
  );
}

export default ReimbursementNavBar;

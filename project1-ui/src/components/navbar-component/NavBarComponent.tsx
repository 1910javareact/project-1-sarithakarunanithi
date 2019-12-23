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
      <br />
      <Navbar color="light" light expand="md">
        <NavbarBrand>Reimbursement</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="nav">
              <Link to='/users/display/id/'>UserById</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/users/update'>UserUpdate</Link>
            </NavItem>

            <NavItem className="nav">
              <Link to='/users/display'>Users</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/reimbursements/status/'>ReimbursementStatus</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/reimbursements/'>SubmitReimbursement</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/reimbursements/update/'>UpdateReimbursement</Link>
            </NavItem>
            <NavItem className="nav">
              <Link to='/reimbursements/user/'>ReimbursementUser</Link>
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

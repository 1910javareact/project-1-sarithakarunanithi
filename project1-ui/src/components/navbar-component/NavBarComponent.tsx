import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ReimbursementNavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);    // this is a hook

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Reimbursement</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem> 
               
            <UncontrolledDropdown nav inNavbar>
            <NavItem>
            <Link to='/users/display'>Users</Link>
            </NavItem> 
            <NavItem>
            <Link to='/reimbursements/status/'>Reimbursement</Link>
            </NavItem> 
            <NavItem>
            <Link to='/users/id/'>UserById</Link>
            </NavItem> 
              
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ReimbursementNavBar;
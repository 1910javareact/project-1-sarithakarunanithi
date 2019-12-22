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
            <NavItem className="nav">
              <Link to='/login'>Login</Link>
            </NavItem>
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
    </div>
  );
}

export default ReimbursementNavBar;

// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const ReimbursementNavBar = (props: any) => {
//   const [isOpen, setIsOpen] = useState(false);    // this is a hook

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand>Reimbursement</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <Link to='/login'>Login</Link>
//             </NavItem> 

//             <UncontrolledDropdown nav inNavbar>
//             <NavItem>
//             <Link to='/users/display'>Users</Link>
//             </NavItem> 
//             <NavItem>
//             <Link to='/reimbursements/status/'>Reimbursement</Link>
//             </NavItem> 
//             <NavItem>
//             <Link to='/users/display/id/'>UserById</Link>
//             </NavItem> 

//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default ReimbursementNavBar;
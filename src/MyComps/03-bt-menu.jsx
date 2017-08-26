import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Menu1 = () => {
  let btn1 = {
    backgroundColor: "black",
    marginRight: "3px"
  }


  let bar1 ={
    width: "100%",
    border: "1px solid gray",
    display: "flex",
    justifyContent: "center"
  }

  return(
    <div style={bar1}>


        <Nav>
          <NavItem>
            <NavLink style={btn1} href="#">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={btn1} href="#">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={btn1} href="#">Link 3</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={btn1} href="#">Link 4</NavLink>
          </NavItem>
        </Nav>

      </div>
  );
}

export default Menu1;

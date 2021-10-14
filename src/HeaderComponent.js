import 'bootstrap/dist/css/bootstrap.css';
import React, { useState }from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">;
                <NavbarBrand>DadJoke.io</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavItem>
                        <NavLink to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="newjoke" >Submit a Joke</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavItem>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderComponent

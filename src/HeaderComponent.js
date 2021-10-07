import 'bootstrap/dist/css/bootstrap.css';
import React, { useState }from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavebarText} from 'reactstrap';

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
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Submit a Joke</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Contact</NavLink>
                    </NavItem>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderComponent

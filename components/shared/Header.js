import React, { useState } from 'react';
import Link from 'next/link'
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
    DropdownItem
} from 'reactstrap';
import auth0 from '../../services/auth0';

const BsNavLink = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
    )
}

const Login = () => {
    return (
        <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    )
}

const Logout = () => {
    return (
        <span className="nav-link port-navbar-link clickable">Logout</span>
    )
}


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                <NavbarBrand className="port-navbar-brand" href="/">freelance-web.dev</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/" title="Accueil" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/portfolios" title="Portfolio" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/blogs" title="Blog" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/CV" title="CV" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <Login />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <Logout />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
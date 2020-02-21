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

const BsNavLink = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}><a className="nav-link">{title}</a></Link>
    )
}

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">freelance-web.dev</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <BsNavLink route="/" title="Accueil" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/about" title="About" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/portfolios" title="Portfolio" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/blogs" title="Blog" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/CV" title="CV" />
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
import React, {Component} from 'react';
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

export default class Header
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Navbar color={'primary'}
                    dark
                    expand="sm">
                <NavbarBrand href="/">
                    Vent
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse  navbar
                           isOpen={this.state.isOpen}>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/events">
                                Events
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav
                                              inNavbar>
                            <DropdownToggle nav
                                            caret>
                                Profile
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    My Events
                                </DropdownItem>
                                <DropdownItem>
                                    Manage Account
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Log out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
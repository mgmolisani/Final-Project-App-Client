import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler} from "reactstrap";

export default class TopMenu
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className='menu-container'>
                <Navbar color="faded" dark expand={this.props.expand || 'md'} className='text-right'>
                    <NavbarToggler onClick={this.toggleNavbar}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            {this.props.children}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

TopMenu.propTypes = {};

TopMenu.defaultProps = {};
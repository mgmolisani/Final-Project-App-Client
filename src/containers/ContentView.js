import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CalendarView from "./CalendarView";
import EventView from "./EventView";
import {Route} from "react-router-dom";

export default class ContentView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='d-flex h-100 w-100'>
                {this.props.children}
            </div>
        );
    }
}

ContentView.propTypes = {};

ContentView.defaultProps = {};
import React, {Component} from 'react';
import EventView from "./EventView";
import {Route} from "react-router-dom";

export default class EventListView
    extends Component {

    render() {
        return (
            <div className='d-flex h-100 w-100'>
                <div style={{
                    flexBasis: '70%',
                    height: '100%'
                }}>
                    <CalendarView/>
                </div>
                <div style={{
                    flexBasis: '30%',
                    height: '100%'
                }}>
                    <Route path={'/events/:eventId'} component={EventView}/>
                </div>
            </div>
        );
    }
}

EventListView.propTypes = {};

EventListView.defaultProps = {};
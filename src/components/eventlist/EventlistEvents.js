import React, {Component} from 'react';
import EventlistEventsItem from "./EventlistEventsItem";

export default class EventlistEvents
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.events.map(event => {
                    return <EventlistEventsItem key={event._id}
                                                event={event}/>
                })}
            </div>
        );
    }
}

EventlistEvents.propTypes = {};

EventlistEvents.defaultProps = {};
import React, {Component} from 'react';
import ProfileUpcomingEventsListItem from "./ProfileUpcomingEventsListItem";
import moment from "moment/moment";

export default class ProfileUpcomingEventsList
    extends Component {

    sortedEvents() {
        let sortedEvents = [...this.props.events];
        sortedEvents.sort((a, b) => {
            return moment(a.date).isAfter(moment(b.date)) ?
                -1 :
                1
        });
        return sortedEvents.filter(event => (moment(event.start).startOf('day').isSameOrAfter(moment().startOf('day'))));
    }

    render() {
        return (
            <div className='profile-recent-list'>
                {this.sortedEvents().map(event => {
                    return <ProfileUpcomingEventsListItem key={event._id}
                                                          event={event}/>
                })}
            </div>
        );
    }
}

ProfileUpcomingEventsList.propTypes = {};

ProfileUpcomingEventsList.defaultProps = {};
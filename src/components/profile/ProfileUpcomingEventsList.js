import React, {Component} from 'react';
import ProfileUpcomingEventsListItem from "./ProfileUpcomingEventsListItem";

export default class ProfileUpcomingEventsList
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.events.map(event => {
                    return <ProfileUpcomingEventsListItem key={event.id}
                                                          event={event}/>
                })}
            </div>
        );
    }
}

ProfileUpcomingEventsList.propTypes = {};

ProfileUpcomingEventsList.defaultProps = {};
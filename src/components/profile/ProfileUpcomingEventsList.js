import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ProfileUpcomingEventsListItem from "./ProfileUpcomingEventsListItem";

export default class ProfileUpcomingEventsList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.events.map(event => {
                    return <ProfileUpcomingEventsListItem event={event}/>
                })}
            </div>
        );
    }
}

ProfileUpcomingEventsList.propTypes = {};

ProfileUpcomingEventsList.defaultProps = {};
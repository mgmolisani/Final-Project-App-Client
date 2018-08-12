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
            <div>
                {this.props.activities.map(activity => {
                    return <ProfileUpcomingEventsListItem activity={activity}/>
                })}
            </div>
        );
    }
}

ProfileUpcomingEventsList.propTypes = {};

ProfileUpcomingEventsList.defaultProps = {};
import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class ProfileUpcomingEventsListItem
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {activity} = this.props;
        return (
            <div>
                <p>
                    {activity.name}
                </p>
            </div>
        );
    }
}

ProfileUpcomingEventsListItem.propTypes = {};

ProfileUpcomingEventsListItem.defaultProps = {};
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import EventListCard from "../event-list-grid/EventListCard";

export default class ProfileEventlistRowItem
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EventListCard eventlist={this.props.eventlist}/>
        );
    }
}

ProfileEventlistRowItem.propTypes = {
    eventlist: PropTypes.object.isRequired
};

ProfileEventlistRowItem.defaultProps = {};
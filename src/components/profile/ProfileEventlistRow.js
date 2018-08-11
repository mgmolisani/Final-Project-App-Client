import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ProfileEventlistRowItem from "./ProfileEventlistRowItem";

export default class ProfileEventlistRow
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, eventlists} = this.props;
        return (
            <div>
                {title}
                {eventlists.map(eventlist => {
                    return <ProfileEventlistRowItem eventlist={eventlist}/>
                })}
            </div>
        );
    }
}

ProfileEventlistRow.propTypes = {
    title: PropTypes.string.isRequired,
    eventlists: PropTypes.arrayOf(PropTypes.object).isRequired
};

ProfileEventlistRow.defaultProps = {};
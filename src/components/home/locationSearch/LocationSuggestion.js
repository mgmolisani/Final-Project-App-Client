import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {ListGroupItem} from "reactstrap";

export default class LocationSuggestion
    extends Component {

    render() {
        const {location, onClick} = this.props;
        return (
            <ListGroupItem tabIndex={0}
                           onMouseDown={onClick}>
                {location.description}
            </ListGroupItem>
        );
    }
}

LocationSuggestion.propTypes = {
    location: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

LocationSuggestion.defaultProps = {};
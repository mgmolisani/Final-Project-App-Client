import React, {Component} from 'react';
import {ListGroup} from "reactstrap";
import LocationSuggestion from "../components/home/locationSearch/LocationSuggestion";
import PropTypes from "prop-types";
import {GoogleApiWrapper} from "google-maps-react";

class LocationSuggestionsDropdown
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: []
        };
        this.locationService = new props.google.maps.places.AutocompleteService();
        this.udpateSuggestions = this.updateSuggestions.bind(this);
        this.requestSuggestions = this.requestSuggestions.bind(this);
    }

    updateSuggestions(suggestions) {
        this.setState({suggestions});
    }

    requestSuggestions(value) {
        if (value !== '') {
            this.locationService.getPlacePredictions(
                {input: value},
                (suggestions, status) => {
                    let newSuggestions = [];
                    if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
                        newSuggestions = suggestions;
                    }
                    this.udpateSuggestions(newSuggestions);
                });
        } else {
            this.updateSuggestions([]);
        }
    }

    componentDidMount() {
        this.requestSuggestions(this.props.value);
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.requestSuggestions(this.props.value);
        }
    }

    render() {
        return (
            <ListGroup className='location-suggestions'>
                {this.state.suggestions.map(location => {
                    return <LocationSuggestion key={location.place_id}
                                               location={location}
                                               onClick={() => {
                                                   this.props.onSuggestionClick(location.description)
                                               }}/>
                })}
            </ListGroup>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBv1qtSfdOI2rGGulGf5pjyOL94JgsG4i0'
})(LocationSuggestionsDropdown);


LocationSuggestionsDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    onSuggestionClick: PropTypes.func.isRequired
};

LocationSuggestionsDropdown.defaultProps = {};
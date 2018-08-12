import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import FormInput from "../form/FormInput";

class NewEventLocationInput
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: 0,
                lng: 0
            },
            currentLocation: null,
            formattedAddress: '',
            suggestions: []
        };
        this.geocoderService = new props.google.maps.Geocoder();
        this.autocompleteService = new props.google.maps.places.AutocompleteService();
        this.updateFormattedAddress = this.updateFormattedAddress.bind(this);
        this.updateSuggestions = this.updateSuggestions.bind(this);
    }

    updateLocation(location) {
        this.setState({location});
    }

    updateCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const {coords} = position;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
            },
            error => {
                console.log(error.message);
            }
        )
    }

    updateFormattedAddress(formattedAddress) {
        this.setState({formattedAddress});
    }

    updateSuggestions(suggestions) {
        this.setState({suggestions});
    }

    requestSuggestions() {
        const {formattedAddress} = this.state;
        if (formattedAddress !== '') {
            this.autocompleteService.getPlacePredictions(
                {input: formattedAddress},
                (suggestions, status) => {
                    let newSuggestions = [];
                    if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
                        newSuggestions = suggestions;
                    }
                    this.updateSuggestions(newSuggestions);
                });
        } else {
            this.updateSuggestions([]);
        }
    }

    updateLocationFromAddress(address) {

    }

    updateAddressFromLocation() {
        this.geocoderService.geocode(
            {location: this.state.location},
            locations => {
                this.updateFormattedAddress(
                    locations && locations.length > 0 && locations[0].formatted_address ?
                        locations[0].formatted_address :
                        this.state.formattedAddress
                );
            });
    }

    goToCurrentLocation() {
        if (this.state.currentLocation) {
            this.updateLocation(this.state.currentLocation);
        }
    }

    componentDidMount() {
        this.updateCurrentLocation();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentLocation !== prevState.currentLocation) {
            this.updateLocation(this.state.currentLocation)
        }
        if (this.state.formattedAddress !== prevState.formattedAddress) {
            this.updateLocationFromAddress();
        }
        if (this.state.location !== prevState.location) {
            this.updateAddressFromLocation();
        }
    }

    render() {
        const {location, currentLocation, formattedAddress, suggestions} = this.state;
        console.log(suggestions);
        return (
            <div>
                <FormInput label={'Location'}
                           value={formattedAddress}
                           onChange={event => {
                               this.requestSuggestions();
                               this.updateFormattedAddress(event.target.value)
                           }}/>
                <div className='position-relative' style={{
                    width: 800,
                    height: 500
                }}>
                    <Map google={this.props.google}
                         style={{
                             width: '100%',
                             height: '100%'
                         }}
                         onDragend={(mapProps, map) => {
                             const {center} = map;
                             this.updateLocation(center);
                         }}
                         center={location}
                         zoom={10}>
                        <Marker position={location}/>
                    </Map>
                </div>
                {currentLocation &&
                currentLocation !== location ?
                    <button onClick={() => this.goToCurrentLocation()}>
                        Recenter
                    </button> :
                    null}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBwNLgxfMs5h2u3h9GjpAXNeylzCYP0K18'
})(NewEventLocationInput);

NewEventLocationInput.propTypes = {};

NewEventLocationInput.defaultProps = {};
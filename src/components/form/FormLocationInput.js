import React, {Component} from 'react';
import {GoogleApiWrapper} from "google-maps-react";
import FormInput from "./FormInput";

class FormLocationInput
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAddress: '',
            suggestions: []
        };
        this.geocoderService = new props.google.maps.Geocoder();
        this.autocompleteService = new props.google.maps.places.AutocompleteService();
        this.updateSuggestions = this.updateSuggestions.bind(this);
    }

    updateCurrentAddress() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const {coords} = position;
                const location = {
                    lat: coords.latitude,
                    lng: coords.longitude
                };
                this.geocoderService.geocode(
                    {location},
                    locations => {
                        if (locations && locations.length > 0 && locations[0].formatted_address) {
                            this.setState({currentAddress: locations[0].formatted_address})
                        }
                    }
                );
            }
        )
    }

    updateSuggestions(suggestions) {
        this.setState({suggestions});
    }

    requestSuggestions() {
        const {address} = this.props;
        if (address !== '') {
            this.autocompleteService.getPlacePredictions(
                {input: address},
                (suggestions, status) => {
                    let newSuggestions = [];
                    if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
                        newSuggestions = suggestions.filter(suggestion => (suggestion.description !== address));
                    }
                    this.updateSuggestions(newSuggestions);
                });
        } else {
            this.updateSuggestions([]);
        }
    }

    componentDidMount() {
        this.updateCurrentAddress()
    }

    componentDidUpdate(prevProps) {
        if (this.props.address !== prevProps.address) {
            this.requestSuggestions();
        }
    }

    renderUseCurrentAddressButton() {
        const {address, readOnly, showCurrentAddressButton, updateAddress} = this.props;
        const {currentAddress} = this.state;
        if (!readOnly && showCurrentAddressButton && currentAddress && address !== currentAddress) {
            return <button type={'button'}
                           onClick={event => {
                               updateAddress(currentAddress)
                           }}>
                Use Current Address
            </button>
        }
    }

    render() {
        const {label, address, readOnly, onChange, updateAddress} = this.props;
        const {currentAddress, suggestions} = this.state;
        return (
            <div>
                <FormInput label={label}
                           value={address}
                           readOnly={readOnly}
                           onChange={onChange}/>
                <ul>
                    {suggestions.map(suggestion => {
                        return <li onClick={event => {
                            updateAddress(suggestion.description)
                        }}>
                            {suggestion.description}
                        </li>
                    })}
                </ul>
                {this.renderUseCurrentAddressButton()}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBwNLgxfMs5h2u3h9GjpAXNeylzCYP0K18',
    LoadingContainer: () => {
        return <FormInput label={'Address'}
                          value={''}
                          onChange={() => {
                          }}/>
    }
})(FormLocationInput);

FormLocationInput.propTypes = {};

FormLocationInput.defaultProps = {};
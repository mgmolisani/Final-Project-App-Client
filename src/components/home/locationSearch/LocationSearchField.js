import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import LocationSuggestionsDropdown from "../../../containers/LocationSuggestionsDropdown";

export default class LocationSearchField
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showSuggestions: false
        };
        this.updateValue = this.updateValue.bind(this);
        this.toggleSuggestions = this.toggleSuggestions.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuggestionClick = this.onSuggestionClick.bind(this);
    }

    updateValue(value) {
        this.setState({value});
    }

    toggleSuggestions() {
        this.setState({showSuggestions: !this.state.showSuggestions});
    }

    onChange(value) {
        this.updateValue(value);
    }

    onSuggestionClick(value) {
        this.updateValue(value);
    }

    render() {
        return (
            <Form className='w-50 m-auto'>
                <FormGroup>
                    <InputGroup>
                        <Input className='custom'
                               value={this.state.value}
                               placeholder={'Search for events near you...'}
                               onChange={event => {
                                   this.onChange(event.target.value);
                               }}
                               onFocus={event => {
                                   this.toggleSuggestions()
                               }}
                               onBlur={event => {
                                   this.toggleSuggestions()
                               }}/>
                        <InputGroupAddon className='custom'
                                         addonType={'append'}>
                            <Button type={'button'}
                                    color={'secondary'}>
                                <FontAwesomeIcon icon={'search'}/>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <LocationSuggestionsDropdown value={this.state.value}
                                                 visible={this.state.showSuggestions}
                                                 onSuggestionClick={this.onSuggestionClick}/>
                </FormGroup>
            </Form>
        );
    }
}

LocationSearchField.propTypes = {};

LocationSearchField.defaultProps = {};
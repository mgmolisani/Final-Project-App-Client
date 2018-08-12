import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ContentView from "./ContentView";
import NewEventForm from "../components/new-event/NewEventForm";

export default class NewEventView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100'>
                    <NewEventForm/>
                </div>
            </ContentView>
        );
    }
}
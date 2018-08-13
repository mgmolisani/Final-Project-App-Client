import React, {Component} from 'react';
import ContentView from "../ContentView";
import NewEventlistForm from "../../components/new-event/NewEventlistForm";
import FormLabel from "../../components/form/FormLabel";
import ChoosableEventsList from "../../components/new-event/ChoosableEventsList";
import {events} from "../../constants/DummyData";

export default class NewEventlistView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: events
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <NewEventlistForm/>
                    <FormLabel label={'Add Events'}/>
                    <ChoosableEventsList events={this.state.events}/>
                </div>
            </ContentView>
        );
    }
}

NewEventlistView.propTypes = {};

NewEventlistView.defaultProps = {};
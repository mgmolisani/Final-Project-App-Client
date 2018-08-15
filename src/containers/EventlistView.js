import React, {Component} from 'react';
import {eventlists, events} from "../constants/DummyData";
import EventlistForm from "../components/eventlist/EventlistForm";
import FormLabel from "../components/form/FormLabel";
import ContentView from "./ContentView";
import EventlistEvents from "../components/eventlist/EventlistEvents";
import NavigationMenu from "./NavigationMenu";

export default class EventlistView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventlist: {
                events: []
            }
        };
    }

    fetchEventlistById() {
        const {eventlistId} = this.props.match.params;
        this.setState({eventlist: eventlists[0]});
    }

    componentDidMount() {
        this.fetchEventlistById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventlistId !== prevProps.match.params.eventlistId) {
            this.fetchEventlistById()
        }
    }

    render() {
        return (
            <div className='d-flex'
                 style={{
                     position: 'absolute',
                     top: 0,
                     bottom: 0,
                     left: 0,
                     right: 0,
                     overflow: 'hidden'
                 }}>
                <NavigationMenu/>
                <ContentView>
                    <div className='d-flex flex-column'>
                        <div className='form-wrapper'>
                            <form className='form-container pt-4'>
                                <EventlistForm eventlist={this.state.eventlist}/>
                                <FormLabel label={'Events'}/>
                                <EventlistEvents events={events || this.props.eventlist.events}/>
                            </form>
                        </div>
                    </div>
                </ContentView>
            </div>
        );
    }
}

EventlistView.propTypes = {};

EventlistView.defaultProps = {};
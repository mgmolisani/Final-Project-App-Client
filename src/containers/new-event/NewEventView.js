import React, {Component} from 'react';
import ContentView from "../ContentView";
import NewEventForm from "../../components/event/NewEventForm";

export default class NewEventView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        };
        this.updateEvent = this.updateEvent.bind(this);
    }

    updateEvent(event) {
        this.setState({
            event: {
                ...this.state.event,
                ...event
            }
        })
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <div className='form-wrapper'>
                        <form className='form-container'>
                            <NewEventForm event={this.state.event}
                                          updateEvent={this.updateEvent}/>
                        </form>
                    </div>
                </div>
            </ContentView>
        );
    }
}

NewEventView.propTypes = {};

NewEventView.defaultProps = {};
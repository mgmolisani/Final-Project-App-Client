import React, {Component} from 'react';
import EventCommentList from "./EventCommentList";

export default class EventCommentPanel
    extends Component {

    constructor(props) {
        super(props);
        this.state ={
            value: ''
        }
    }

    onChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <EventCommentList eventId={this.props.eventId}/>
            </div>
        );
    }
}

EventCommentPanel.propTypes = {};

EventCommentPanel.defaultProps = {};
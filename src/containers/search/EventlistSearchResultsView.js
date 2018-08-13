import React, {Component} from 'react';
import * as queryString from "query-string";
import {eventlists, events} from "../../constants/DummyData";
import EventlistSearchResults from "../../components/search/EventlistSearchResults";

export default class EventlistSearchResultsView

    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventlists: []
        }
    }

    findMatchingEventlists(search) {
        this.setState({eventlists: eventlists});
    }

    componentDidMount() {
        const search = queryString.parse(this.props.location.search);
        this.findMatchingEventlists(search);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const search = queryString.parse(this.props.location.search);
            this.findMatchingEventlists(search);
        }
    }

    render() {
        return (
            <EventlistSearchResults eventlists={this.state.eventlists}/>
        );
    }
}

EventlistSearchResultsView.propTypes = {};

EventlistSearchResultsView.defaultProps = {};
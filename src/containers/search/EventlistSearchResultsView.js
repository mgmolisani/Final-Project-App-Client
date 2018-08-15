import React, {Component} from 'react';
import * as queryString from "query-string";
import EventlistSearchResults from "../../components/search/EventlistSearchResults";
import EventlistService from "../../services/EventlistService";

export default class EventlistSearchResultsView

    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventlists: []
        };
        this.eventlistService = EventlistService.instance;
    }

    findMatchingEventlists(search) {
        this.eventlistService
            .searchForEventlist(search)
            .then(eventlists => {
                this.setState({eventlists});
            });
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
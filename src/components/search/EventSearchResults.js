import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import FormLabel from "../form/FormLabel";
import EventSearchResultsItem from "./EventSearchResultsItem";

class EventSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'Event Search Results'}/>
                <div className='profile-recent-list'>
                    {this.props.events.map(event => {
                        return <EventSearchResultsItem key={event.id}
                                                       event={event}
                                                       currentUser={this.props.currentUser}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default withLogin(EventSearchResults);

EventSearchResults.propTypes = {};

EventSearchResults.defaultProps = {};
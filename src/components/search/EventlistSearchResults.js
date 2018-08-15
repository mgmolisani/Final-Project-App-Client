import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import withLogin from "../utils/withLogin";
import EventlistSearchResultsItem from "./EventlistSearchResultsItem";

class EventlistSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'Event List Search Results'}/>
                <div className='profile-recent-list'>
                    {this.props.eventlists.map(eventlist => {
                        return <EventlistSearchResultsItem key={eventlist._id}
                                                           eventlist={eventlist}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default withLogin(EventlistSearchResults);

EventlistSearchResults.propTypes = {};

EventlistSearchResults.defaultProps = {};
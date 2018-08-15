import React, {Component} from 'react';
import ContentView from "../ContentView";
import EventlistForm from "../../components/eventlist/EventlistForm";
import FormLabel from "../../components/form/FormLabel";
import ChoosableEventsList from "../../components/new-event/ChoosableEventsList";
import UserService from "../../services/UserServices";

export default class NewEventlistView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.userService = UserService.instance;
    }

    fetchFollowedEventsForUser() {
        const {userId} = this.props;
        this.userService
            .findFollowedEventsForUser(userId)
            .then(events => {
                this.setState({events});
            })
    }

    componentDidMount() {
        this.fetchFollowedEventsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchFollowedEventsForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <div className='form-wrapper'>
                        <form className='form-container'>
                            <EventlistForm/>
                            <FormLabel label={'Add Events'}/>
                            {this.state.events.length > 0 ?
                                <ChoosableEventsList events={this.state.events}/> :
                                <h6 className='text-white'>
                                    Follow events to see them here.
                                </h6>}
                        </form>
                    </div>
                </div>
            </ContentView>
        );
    }
}

NewEventlistView.propTypes = {};

NewEventlistView.defaultProps = {};
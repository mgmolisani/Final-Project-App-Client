import React, {Component} from 'react';
import FormLabel from "../../components/form/FormLabel";
import ContentView from "../ContentView";
import UserService from "../../services/UserServices";
import ProfileUpcomingEventsList from "../../components/profile/ProfileUpcomingEventsList";

export default class ProfileFollowedEventsView
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
                    <FormLabel label={'Followed Events'}/>
                    <ProfileUpcomingEventsList events={this.state.events}/>
                </div>
            </ContentView>
        );
    }
}
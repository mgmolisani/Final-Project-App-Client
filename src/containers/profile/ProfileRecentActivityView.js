import React, {Component} from 'react';
import ProfileUpcomingEventsList from "../../components/profile/ProfileUpcomingEventsList";
import ProfileRecentCommentList from "../../components/profile/ProfileRecentCommentList";
import ContentView from "../ContentView";
import {Col, Row} from "reactstrap";
import FormLabel from "../../components/form/FormLabel";
import UserService from "../../services/UserServices";

export default class ProfileRecentActivityView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            comments: []
        };
        this.userService = UserService.instance;
    }

    fetchAllCommentsForUser() {
        this.userService
            .findAllCommentsForUser(this.props.userId)
            .then(comments => {
                this.setState({comments});
            });
    }

    fetchAllEventsForUser() {
        this.userService
            .findFollowedEventsForUser(this.props.userId)
            .then(events => {
                this.setState({events});
            });
    }

    componentDidMount() {
        this.fetchAllCommentsForUser();
        this.fetchAllEventsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchAllCommentsForUser();
            this.fetchAllEventsForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <Row noGutters>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column'>
                            <FormLabel label={'Upcoming Events'}/>
                            <ProfileUpcomingEventsList events={this.state.events}/>
                        </div>
                    </Col>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column'>
                            <FormLabel label={'Recent Comments'}/>
                            <ProfileRecentCommentList comments={this.state.comments}/>
                        </div>
                    </Col>
                </Row>
            </ContentView>
        );
    }
}

ProfileRecentActivityView.propTypes = {};

ProfileRecentActivityView.defaultProps = {};
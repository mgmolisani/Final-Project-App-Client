import React, {Component} from 'react';
import ProfileUpcomingEventsList from "../../components/profile/ProfileUpcomingEventsList";
import * as DummyData from "../../constants/DummyData";
import ProfileRecentCommentList from "../../components/profile/ProfileRecentCommentList";
import ContentView from "../ContentView";
import {Col, Row} from "reactstrap";
import FormLabel from "../../components/form/FormLabel";

export default class ProfileRecentActivityView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            comments: []
        }
    }

    fetchActivitesForUser() {
        this.setState({events: DummyData.events});
    }

    fetchCommentsForUser() {
        this.setState({comments: DummyData.comments});
    }

    componentDidMount() {
        this.fetchActivitesForUser();
        this.fetchCommentsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchActivitesForUser();
            this.fetchCommentsForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <Row noGutters>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column h-100'>
                            <FormLabel label={'Upcoming Events'}/>
                                <ProfileUpcomingEventsList events={this.state.events}/>
                        </div>
                    </Col>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column h-100'>
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
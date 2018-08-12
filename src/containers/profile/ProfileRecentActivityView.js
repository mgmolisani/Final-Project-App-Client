import React, {Component} from 'react';
import ProfileContent from "../../components/profile/ProfileContent";
import ProfileUpcomingEventsList from "../../components/profile/ProfileUpcomingEventsList";
import * as DummyData from "../../constants/DummyData";
import ProfileRecentCommentList from "../../components/profile/ProfileRecentCommentList";
import FormLabel from "../../components/form/FormLabel";

export default class ProfileRecentActivityView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            comments: []
        }
    }

    fetchActivitesForUser() {
        const {userId} = this.props;
        const activities = DummyData.activitiesForEvent1;
        this.setState({activities});
    }

    fetchCommentsForUser() {
        const comments = DummyData.comments;
        this.setState({comments});
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
            <ProfileContent>
                <ProfileUpcomingEventsList activities={this.state.activities}/>
                <ProfileRecentCommentList comments={this.state.comments}/>
            </ProfileContent>
        );
    }
}

ProfileRecentActivityView.propTypes = {};

ProfileRecentActivityView.defaultProps = {};
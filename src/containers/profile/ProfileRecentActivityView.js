import React, {Component} from 'react';
import ContentView from "../ContentView";
import FormLabel from "../../components/form/FormLabel";
import UserService from "../../services/UserServices";
import ProfileRecentCommentList from "../../components/profile/ProfileRecentCommentList";

export default class ProfileRecentActivityView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    componentDidMount() {
        this.fetchAllCommentsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchAllCommentsForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <FormLabel label={'Recent Comments'}/>
                    <ProfileRecentCommentList comments={this.state.comments}/>
                </div>
            </ContentView>
        );
    }
}
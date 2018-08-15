import React, {Component} from 'react';
import ProfileConnectionsList from "../../components/profile/ProfileConnectionsList";
import FormLabel from "../../components/form/FormLabel";
import ContentView from "../ContentView";
import UserService from "../../services/UserServices";

export default class ProfileFollowingView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            following: []
        };
        this.userService = UserService.instance;
    }

    fetchFollowingForUser() {
        const {userId} = this.props;
        this.userService
            .findFollowingForUser(userId)
            .then(following => {
                this.setState({following});
            })
    }

    componentDidMount() {
        this.fetchFollowingForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchFollowingForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <FormLabel label={'Following'}/>
                    <ProfileConnectionsList users={this.state.following}/>
                </div>
            </ContentView>
        );
    }
}

ProfileFollowingView.propTypes = {};

ProfileFollowingView.defaultProps = {};
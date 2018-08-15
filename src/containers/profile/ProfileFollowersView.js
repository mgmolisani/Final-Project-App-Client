import React, {Component} from 'react';
import ProfileConnectionsList from "../../components/profile/ProfileConnectionsList";
import ContentView from "../ContentView";
import FormLabel from "../../components/form/FormLabel";
import UserService from "../../services/UserServices";

export default class ProfileFollowersView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };
        this.userService = UserService.instance;
    }

    fetchFollowersForUser() {
        const {userId} = this.props;
        this.userService
            .findFollowersForUser(userId)
            .then(followers => {
                this.setState({followers});
            })
    }

    componentDidMount() {
        this.fetchFollowersForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchFollowersForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <FormLabel label={'Followers'}/>
                    <ProfileConnectionsList users={this.state.followers}/>
                </div>
            </ContentView>
        );
    }
}

ProfileFollowersView.propTypes = {};

ProfileFollowersView.defaultProps = {};
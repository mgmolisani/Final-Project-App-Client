import React, {Component} from 'react';
import * as DummyData from "../../constants/DummyData";
import ProfileConnectionsList from "../../components/profile/ProfileConnectionsList";
import ProfileContent from "../../components/profile/ProfileContent";

export default class ProfileFollowersView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    fetchFollowersForUser() {
        const {userId} = this.props;
        const followers = DummyData.users[userId - 1].connections.followers.map(followerId => {
            return DummyData.users[followerId - 1];
        });
        this.setState({followers});
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
            <ProfileContent>
                <ProfileConnectionsList users={this.state.followers}/>
            </ProfileContent>
        );
    }
}

ProfileFollowersView.propTypes = {};

ProfileFollowersView.defaultProps = {};
import React, {Component} from 'react';
import * as DummyData from "../../constants/DummyData";
import ProfileConnectionsList from "../../components/profile/ProfileConnectionsList";
import ProfileContent from "../../components/profile/ProfileContent";

export default class ProfileFollowingView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            following: []
        }
    }

    fetchFollowingForUser() {
        const {userId} = this.props;
        const following = DummyData.users[userId - 1].connections.following.map(followingId => {
            return DummyData.users[followingId - 1];
        });
        this.setState({following});
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
            <ProfileContent>
                <ProfileConnectionsList users={this.state.following}/>
            </ProfileContent>
        );
    }
}

ProfileFollowingView.propTypes = {};

ProfileFollowingView.defaultProps = {};
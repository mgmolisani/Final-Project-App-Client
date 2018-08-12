import React, {Component} from 'react';
import * as DummyData from "../../constants/DummyData";
import ProfileContent from "../../components/profile/ProfileContent";
import ProfileInfo from "../../components/profile/ProfileInfo";

export default class ProfileOverviewView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.updateUser = this.updateUser.bind(this);
    }

    fetchUserById() {
        const {userId} = this.props;
        const user = DummyData.users[userId - 1];
        this.setState({user});
    }

    updateUser(user) {
        this.setState({
            user: {
                ...this.state.user,
                ...user
            }
        })
    }

    componentDidMount() {
        this.fetchUserById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchUserById();
        }
    }

    render() {
        return (
            <ProfileContent>
                <ProfileInfo user={this.state.user}
                             updateUser={this.updateUser}/>
            </ProfileContent>
        );
    }
}

ProfileOverviewView.propTypes = {};

ProfileOverviewView.defaultProps = {};
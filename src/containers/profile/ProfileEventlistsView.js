import React, {Component} from 'react';
import ProfileContent from "../../components/profile/ProfileContent";
import * as DummyData from "../../constants/DummyData";
import ProfileEventlistsRow from "../../components/profile/ProfileEventlistRow";

export default class ProfileEventlistsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owns: [],
            follows: []
        }
    }

    fetchEventlistsForUser() {
        const {userId} = this.props;
        const owns = DummyData.users[userId - 1].eventlists.owns.map(eventlistId => {
            return DummyData.eventlists[eventlistId - 1];
        });
        const follows = DummyData.users[userId - 1].eventlists.follows.map(eventlistId => {
            return DummyData.eventlists[eventlistId - 1];
        });
        this.setState({owns, follows});
    }

    componentDidMount() {
        this.fetchEventlistsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchEventlistsForUser();
        }
    }

    render() {
        return (
            <ProfileContent>
                <ProfileEventlistsRow title={'Created'}
                                      eventlists={this.state.owns}/>
                <ProfileEventlistsRow title={'Following'}
                                      eventlists={this.state.follows}/>
            </ProfileContent>
        );
    }
}

ProfileEventlistsView.propTypes = {};

ProfileEventlistsView.defaultProps = {};
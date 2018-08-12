import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ProfileEventlistsView from "./profile/ProfileEventlistsView";
import ProfileOverviewView from "./profile/ProfileOverviewView";
import ProfileRecentActivityView from "./profile/ProfileRecentActivityView";
import ProfileFollowingView from "./profile/ProfileFollowingView";
import ProfileFollowersView from "./profile/ProfileFollowersView";
import ContentView from "./ContentView";
import LoginMenu from "../components/login/LoginMenu";
import LoginForm from "../components/login/LoginForm";

export default class LoginView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100'>
                    <LoginMenu/>
                    <LoginForm/>
                </div>
            </ContentView>
        );
    }
}

LoginView.propTypes = {};

LoginView.defaultProps = {};
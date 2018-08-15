import React, {Component} from 'react';
import ContentView from "./ContentView";
import ProfileMenu from "../components/profile/ProfileMenu";
import {Switch} from "react-router-dom";
import ProfileOverviewView from "./profile/ProfileOverviewView";
import ProfileRecentActivityView from "./profile/ProfileRecentActivityView";
import ProfileEventlistsView from "./profile/ProfileEventlistsView";
import ProfileFollowersView from "./profile/ProfileFollowersView";
import ProfileFollowingView from "./profile/ProfileFollowingView";
import * as DummyData from "../constants/DummyData";
import ProfileRoute from "../components/utils/ProfileRoute";
import NavigationMenu from "./NavigationMenu";

export default class ProfileView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    fetchUserById() {
        const {userId} = this.props.match.params;
        this.setState({user: DummyData.users[userId - 1]});
    }

    componentDidMount() {
        this.fetchUserById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchUserById();
        }
    }

    render() {
        const {url, params} = this.props.match;
        const {userId} = params;
        return (
            <div className='d-flex'
                 style={{
                     position: 'absolute',
                     top: 0,
                     bottom: 0,
                     left: 0,
                     right: 0,
                     overflow: 'hidden'
                 }}>
                <NavigationMenu/>
                <ContentView>
                    <div className='d-flex flex-column w-100 h-100'
                         style={{
                             overflow: 'hidden'
                         }}>
                        <ProfileMenu/>
                        <Switch>
                            <ProfileRoute path={`${url}`}
                                          exact
                                          component={ProfileOverviewView}
                                          userId={userId}/>
                            <ProfileRoute path={`${url}/recent`}
                                          component={ProfileRecentActivityView}
                                          userId={userId}/>
                            <ProfileRoute path={`${url}/eventlists`}
                                          component={ProfileEventlistsView}
                                          userId={userId}/>
                            <ProfileRoute path={`${url}/followers`}
                                          component={ProfileFollowersView}
                                          userId={userId}/>
                            <ProfileRoute path={`${url}/following`}
                                          component={ProfileFollowingView}
                                          userId={userId}/>
                        </Switch>
                    </div>
                </ContentView>
            </div>
        );
    }
}
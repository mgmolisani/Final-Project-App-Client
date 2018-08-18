import React, {Component} from 'react';
import ContentView from "./ContentView";
import ProfileMenu from "../components/profile/ProfileMenu";
import {Switch} from "react-router-dom";
import ProfileOverviewView from "./profile/ProfileOverviewView";
import ProfileFollowersView from "./profile/ProfileFollowersView";
import ProfileFollowingView from "./profile/ProfileFollowingView";
import ProfileRoute from "../components/utils/ProfileRoute";
import ProfileFollowedEventsView from "./profile/ProfileFollowedEventsView";

export default class ProfileView
    extends Component {

    render() {
        const {url, params} = this.props.match;
        const {userId} = params;
        return (
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
                        {/*<ProfileRoute path={`${url}/recent`}
                                      component={ProfileRecentActivityView}
                                      userId={userId}/>*/}
                        <ProfileRoute path={`${url}/events`}
                                      component={ProfileFollowedEventsView}
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
        );
    }
}
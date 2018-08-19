import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileView from "./ProfileView";
import SearchView from "./SearchView";
import PageNotFoundView from "./PageNotFoundView";
import CalendarView from "./CalendarView";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import EventView from "./EventView";
import NavigationMenu from "./NavigationMenu";
import NewEventView from "./NewEventView";
import InstagramToken from "./InstagramToken";
import AdminView from "./AdminView";
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";

export default class App
    extends Component {

    render() {
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
                <AuthenticationConsumer>
                    {({currentUser}) => (
                        <NavigationMenu currentUser={currentUser}/>
                    )}
                </AuthenticationConsumer>
                <Switch>
                    <Route path={'/'}
                           exact
                           render={() => {
                               return <Redirect to={'/search/user'}/>
                           }}/>
                    <Route path={'/instagram/access_token'}
                           component={InstagramToken}/>
                    <Route path={'/calendar'}
                           component={CalendarView}/>
                    <Route path={'/event/new'}
                           component={NewEventView}/>
                    <Route path={'/event/:eventId'}
                           component={EventView}/>
                    <Route path={'/search'}
                           component={SearchView}/>
                    <Route path={'/profile/:userId'}
                           component={ProfileView}/>
                    <Route path={'/login'}
                           component={LoginView}/>
                    <Route path={'/register'}
                           component={RegisterView}/>
                    <Route path={'/admin'}
                           component={AdminView}/>
                    <Route component={PageNotFoundView}/>
                </Switch>
            </div>
        );
    }
}

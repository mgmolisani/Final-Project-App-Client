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
import UserService from "../services/UserServices";

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
                <NavigationMenu/>
                <Switch>
                    <Route path={'/'}
                           exact
                           render={() => {
                               return <Redirect to={'/search'}/>
                           }}/>
                    <Route path={'/calendar'}
                           component={CalendarView}/>
                    <Route path={'/event/:eventId'}
                           component={EventView}/>
                    <Route path={'/search'}
                           component={SearchView}/>
                    <Route path={'/new'}
                           component={EventView}/>
                    <Route path={'/profile/:userId'}
                           component={ProfileView}/>
                    <Route path={'/login'}
                           component={LoginView}/>
                    <Route path={'/register'}
                           component={RegisterView}/>
                    <Route component={PageNotFoundView}/>
                </Switch>
            </div>
        );
    }
}

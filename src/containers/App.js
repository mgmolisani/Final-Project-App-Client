import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import ProfileView from "./ProfileView";
import SearchView from "./SearchView";
import PageNotFoundView from "./PageNotFoundView";
import CreateView from "./CreateView";
import CalendarView from "./CalendarView";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import EventView from "./EventView";
import EventlistView from "./EventlistView";
import UserService from "../services/UserServices";

export default class App
    extends Component {

    render() {
        return (
            <Switch>
                <Route path={'/'}
                       exact
                       component={SearchView}/>
                <Route path={'/calendar'}
                       component={CalendarView}/>
                <Route path={'/event/:eventId'}
                       component={EventView}/>
                <Route path={'/eventlist/:eventlistId'}
                       component={EventlistView}/>
                <Route path={'/search'}
                       component={SearchView}/>
                <Route path={'/create'}
                       component={CreateView}/>
                <Route path={'/profile/:userId'}
                       component={ProfileView}/>
                <Route path={'/login'}
                       component={LoginView}/>
                <Route path={'/register'}
                       component={RegisterView}/>
                <Route component={PageNotFoundView}/>
            </Switch>
        );
    }
}

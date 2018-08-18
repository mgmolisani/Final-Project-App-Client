import React, {Component} from 'react';
import ContentView from "./ContentView";
import {Route, Switch} from "react-router-dom";
import AdminMenu from "../components/admin/AdminMenu";
import EventAdminView from "./admin/EventAdminView";
import UserAdminView from "./admin/UserAdminView";

export default class AdminView
    extends Component {

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <AdminMenu/>
                    <ContentView>
                        <div className='d-flex flex-column'>
                            <div className='form-wrapper'>
                                <Switch>
                                    <Route path={`/admin/user`}
                                           component={UserAdminView}/>
                                    <Route path={`/admin/event`}
                                           component={EventAdminView}/>
                                </Switch>
                            </div>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}

AdminView.propTypes = {};

AdminView.defaultProps = {};
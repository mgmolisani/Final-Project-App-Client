import React, {Component} from 'react';
import ContentView from "./ContentView";
import LoginMenu from "../components/login/LoginMenu";
import LoginForm from "../components/login/LoginForm";
import NavigationMenu from "./NavigationMenu";

export default class LoginView
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
                <ContentView>
                    <div className='d-flex flex-column w-100 h-100'
                         style={{
                             overflow: 'hidden'
                         }}>
                        <LoginMenu/>
                        <ContentView>
                            <div className='d-flex flex-column'>
                                <LoginForm/>
                            </div>
                        </ContentView>
                    </div>
                </ContentView>
            </div>
        );
    }
}

LoginView.propTypes = {};

LoginView.defaultProps = {};
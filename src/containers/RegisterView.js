import React, {Component} from 'react';
import ContentView from "./ContentView";
import RegisterMenu from "../components/register/RegisterMenu";
import RegisterForm from "../components/register/RegisterForm";
import NavigationMenu from "./NavigationMenu";

export default class RegisterView
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
                        <RegisterMenu/>
                        <ContentView>
                            <div className='d-flex flex-column'>
                                <RegisterForm/>
                            </div>
                        </ContentView>
                    </div>
                </ContentView>
            </div>
        );
    }
}

RegisterView.propTypes = {};

RegisterView.defaultProps = {};
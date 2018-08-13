import React, {Component} from 'react';
import ContentView from "./ContentView";
import RegisterMenu from "../components/register/RegisterMenu";
import RegisterForm from "../components/register/RegisterForm";

export default class RegisterView
    extends Component {

    render() {
        return (
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
        );
    }
}

RegisterView.propTypes = {};

RegisterView.defaultProps = {};
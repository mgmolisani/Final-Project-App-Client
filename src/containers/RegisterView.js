import React, {Component} from 'react';
import ContentView from "./ContentView";
import RegisterMenu from "../components/login/RegisterMenu";
import RegisterForm from "../components/login/RegisterForm";

export default class RegisterView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100'>
                    <RegisterMenu/>
                    <RegisterForm/>
                </div>
            </ContentView>
        );
    }
}

RegisterView.propTypes = {};

RegisterView.defaultProps = {};
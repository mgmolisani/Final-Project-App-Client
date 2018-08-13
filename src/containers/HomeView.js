import React, {Component} from 'react';
import ContentView from "./ContentView";
import RegisterForm from "../components/register/RegisterForm";
import TopMenu from "../components/top-menu/TopMenu";

export default class HomeView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <TopMenu/>
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

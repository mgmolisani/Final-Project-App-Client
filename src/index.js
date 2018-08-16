import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./containers/App";
import {library as iconLib} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {AuthenticationProvider} from "./containers/authentication/AuthenticationContext";

iconLib.add(fas);
iconLib.add(far);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AuthenticationProvider>
                <Route path={'/'} component={App}/>
            </AuthenticationProvider>
        </Router>
    </Provider>,
    document.getElementById('root'));
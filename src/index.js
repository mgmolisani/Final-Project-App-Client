import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./containers/App";
import {composeWithDevTools} from "redux-devtools-extension";
import {library as iconLib} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

iconLib.add(fas);
iconLib.add(far);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path={'/'} component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root'));
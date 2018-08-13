import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./containers/App";
import {library as iconLib} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

iconLib.add(fas);
iconLib.add(far);

ReactDOM.render(
    <Router>
        <Route path={'/'} component={App}/>
    </Router>,
    document.getElementById('root'));
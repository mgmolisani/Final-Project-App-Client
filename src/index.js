import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import rootReducer from "./reducers/appReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import InstagramPhotoPickerGrid from "./containers/InstagramPhotoPickerGrid";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import ScrollView from "./components/ScrollView";
import NotScrollView from "./components/NotScrollView";
import InstagramPhotoList from "./components/InstagramPhotoList";


const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ScrollView>
                <InstagramPhotoList/>
            </ScrollView>
            <InstagramPhotoPickerGrid/>
        </div>
    </Provider>,
    document.getElementById('root'));
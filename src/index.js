import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import InstagramPhotoSearchForm from "./containers/InstagramPhotoSearchForm";
import InstagramPhotoList from "./containers/InstagramPhotoList";


const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div className='container'>
            <InstagramPhotoSearchForm/>
            <InstagramPhotoList/>
        </div>
    </Provider>
    ,
    document.getElementById('root'));
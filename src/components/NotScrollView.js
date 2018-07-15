import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchInstagramImagesForUser} from "../actions/instagramActions";
import './NotScrollViewStyle.css';
import InstagramPhotoList from "./InstagramPhotoList";

export default class NotScrollView
    extends Component {

    render() {
        return (
            <div style={{overflow: 'auto'}} className='test'>
                <InstagramPhotoList/>
            </div>
        );
    }
};

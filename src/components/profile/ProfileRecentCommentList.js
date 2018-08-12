import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ProfileRecentCommentListItem from "./ProfileRecentCommentListItem";
import {Link} from "react-router-dom";

export default class ProfileRecentCommentList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return <ProfileRecentCommentListItem comment={comment}/>
                })}
            </div>
        );
    }
}

ProfileRecentCommentList.propTypes = {};

ProfileRecentCommentList.defaultProps = {};
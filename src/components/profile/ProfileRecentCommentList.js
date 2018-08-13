import React, {Component} from 'react';
import PropTypes from 'prop-types'
import moment from "moment";
import ProfileRecentCommentListItem from "./ProfileRecentCommentListItem";
import models from "../../models/models";

export default class ProfileRecentCommentList
    extends Component {

    constructor(props) {
        super(props);
    }

    mostRecentXComments(totalComments) {
        let sortedComments = [...this.props.comments];
        sortedComments.sort((a, b) => {
            return moment(a.date).isAfter(moment(b.date)) ?
                -1 :
                1
        });
        return sortedComments.slice(0, totalComments);
    }

    render() {
        return (
            <div className='profile-recent-list'>
                {this.mostRecentXComments(3).map(comment => {
                    return <ProfileRecentCommentListItem comment={comment}/>
                })}
            </div>
        );
    }
}

ProfileRecentCommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(models.comment)).isRequired
};

ProfileRecentCommentList.defaultProps = {};
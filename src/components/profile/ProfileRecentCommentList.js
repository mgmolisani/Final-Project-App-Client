import React, {Component} from 'react';
import moment from "moment";
import ProfileRecentCommentListItem from "./ProfileRecentCommentListItem";

export default class ProfileRecentCommentList
    extends Component {

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
                {this.mostRecentXComments(10).map(comment => {
                    return <ProfileRecentCommentListItem key={comment.id}
                                                         comment={comment}/>
                })}
            </div>
        );
    }
}
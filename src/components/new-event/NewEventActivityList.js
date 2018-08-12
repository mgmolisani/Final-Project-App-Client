import React, {Component} from 'react';
import NewEventActvityListItem from "./NewEventActvityListItem";
import moment from "moment";

export default class NewEventActivityList
    extends Component {

    constructor(props) {
        super(props);
    }

    createActvity() {
        const {activities, updateActivities, copyOfEvent} = this.props;
        const newActivity = {
            name: copyOfEvent.name,
            description: copyOfEvent.description,
            start: moment().toArray().slice(0, 5),
            end: moment().add(1, 'hours').toArray().slice(0, 5),
        };
        updateActivities([...activities, newActivity]);
    }

    deleteActivity(index) {
        const {activities, updateActivities} = this.props;
        const activitiesCopy = [...activities];
        activitiesCopy.splice(index, 1);
        updateActivities([...activitiesCopy]);
    }

    updateActivity(activity, index) {
        const {activities, updateActivities} = this.props;
        const activitiesCopy = [...activities];
        activitiesCopy.splice(index, 1, activity);
        updateActivities([...activitiesCopy]);
    }

    render() {
        const {activities} = this.props;
        return (
            <div>
                {activities.map((activity, index) => {
                    return <NewEventActvityListItem key={index}
                                                    activity={activity}
                                                    updateActivity={updatedActivity => this.updateActivity(updatedActivity, index)}
                                                    deleteActivity={() => this.deleteActivity(index)}/>
                })}
                <button type={'button'}
                        onClick={event => this.createActvity()}>
                    Add Activity
                </button>
            </div>
        );
    }
}

NewEventActivityList.propTypes = {};

NewEventActivityList.defaultProps = {};
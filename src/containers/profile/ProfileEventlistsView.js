import React, {Component} from 'react';
import * as DummyData from "../../constants/DummyData";
import ProfileEventlistsRow from "../../components/profile/ProfileEventlistList";
import ContentView from "../ContentView";
import {Col, Row} from "reactstrap";
import FormLabel from "../../components/form/FormLabel";

export default class ProfileEventlistsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owns: [],
            follows: []
        }
    }

    fetchEventlistsForUser() {
        const {userId} = this.props;
        const owns = DummyData.users[userId - 1].eventlists.owns.map(eventlistId => {
            return DummyData.eventlists[eventlistId - 1];
        });
        const follows = DummyData.users[userId - 1].eventlists.follows.map(eventlistId => {
            return DummyData.eventlists[eventlistId - 1];
        });
        this.setState({owns, follows});
    }

    componentDidMount() {
        this.fetchEventlistsForUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchEventlistsForUser();
        }
    }

    render() {
        return (
            <ContentView>
                <Row noGutters>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column h-100'>
                            <FormLabel label={'Created By User'}/>
                            <ProfileEventlistsRow eventlists={this.state.owns}/>
                        </div>
                    </Col>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column h-100'>
                            <FormLabel label={'Followed By User'}/>
                            <ProfileEventlistsRow eventlists={this.state.follows}/>
                        </div>
                    </Col>
                </Row>
            </ContentView>
        );
    }
}

ProfileEventlistsView.propTypes = {};

ProfileEventlistsView.defaultProps = {};
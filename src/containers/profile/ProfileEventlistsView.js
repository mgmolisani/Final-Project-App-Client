import React, {Component} from 'react';
import ProfileEventlistsRow from "../../components/profile/ProfileEventlistList";
import ContentView from "../ContentView";
import {Col, Row} from "reactstrap";
import FormLabel from "../../components/form/FormLabel";
import UserService from "../../services/UserServices";

export default class ProfileEventlistsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owns: [],
            follows: []
        };
        this.userService = UserService.instance;
    }

    fetchEventlistsForUser() {
        const {userId} = this.props;
        this.userService
            .findEventlistsForUser(userId)
            .then(eventlists => {
                this.setState({
                    owns: eventlists.owns,
                    follows: eventlists.follows
                });
            });
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
                        <div className='d-flex flex-column'>
                            <FormLabel label={'Created By User'}/>
                            <ProfileEventlistsRow eventlists={this.state.owns}/>
                        </div>
                    </Col>
                    <Col sm={12}
                         md={6}>
                        <div className='d-flex flex-column'>
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
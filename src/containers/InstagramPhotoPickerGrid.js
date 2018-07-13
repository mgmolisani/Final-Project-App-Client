import React, {Component} from 'react';
import {fetchInstagramImagesForUser} from "../actions/instagramActions";
import {connect} from "react-redux";
import {
    Button,
    Card,
    CardBody, CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        findAllInstagramImagesForUser: () => {
            dispatch(fetchInstagramImagesForUser())
        }
    }
}

class InstagramPhotoPickerGrid
    extends Component {

    componentDidMount() {
        this.props.findAllInstagramImagesForUser()
    }

    render() {
        return (
            <Modal isOpen={false}
                   toggle={this.props.toggle}
                   size={'lg'}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody className={'row'}>
                    {this.props.images.map(imageUrl => {
                            return (
                                <Card className={'col-sm-4'}>
                                    <CardBody>
                                        <CardImg top
                                                 src={imageUrl}
                                                 height={'250px'}/>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            );
                        }
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoPickerGrid);

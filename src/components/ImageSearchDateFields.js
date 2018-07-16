import React, {Component} from 'react';
import './NotScrollViewStyle.css';
import {Col, FormGroup, Input, Label, Row} from "reactstrap";

export default class ImageSearchDateFields
    extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup>
                        <Label htmlFor={'imageSearchFromDateField'}>
                            From
                        </Label>
                        <Input id={'imageSearchFromDateField'}
                               type={'date'}
                               onChange={(event) => {
                                   this.props.changeSearchFromDateField(event.target.value)
                               }}
                               value={this.props.fromDateField}>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label htmlFor={'imageSearchToDateField'}>
                            To
                        </Label>
                        <Input id={'imageSearchToDateField'}
                               type={'date'}
                               onChange={(event) => {
                                   this.props.changeSearchToDateField(event.target.value)
                               }}
                               value={this.props.toDateField}>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        );
    }
};

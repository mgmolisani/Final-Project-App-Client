import React, {Component} from 'react';
import './NotScrollViewStyle.css';
import {Button, FormGroup, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faPlus} from "@fortawesome/free-solid-svg-icons/index.es";

"@fortawesome/free-regular-svg-icons/index.es"

export default class ImageSearchTagField
    extends Component {

    render() {
        return (
            <FormGroup>
                <Label htmlFor={'imageSearchTagField'}>
                    Add Tag
                </Label>
                <InputGroup>
                    <Input id={'imageSearchTagField'}
                           type="text"
                           onChange={(event) => {
                               this.props.changeSearchTagField(event.target.value)
                           }}
                           value={this.props.tagField}>
                    </Input>
                    <InputGroupAddon addonType="append">
                        <Button type={'button'}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
};

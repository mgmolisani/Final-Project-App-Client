import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import {Link, withRouter} from "react-router-dom";
import * as queryString from "query-string";

class SearchForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.updateInputField = this.updateInputField.bind(this);
    }

    updateInputField(search) {
        this.setState({search});
    }

    render() {
        return (
            <React.Fragment>
                <h4 className='text-white mt-3'>
                    Search
                </h4>
                <FormInput label={'Enter you search below . . .'}
                           value={this.state.search}
                           onChange={value => this.updateInputField(value)}/>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-secondary my-3'>
                        <Link to={`${this.props.location.pathname}?${queryString.stringify(this.state)}`}>
                            Search
                        </Link>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SearchForm);
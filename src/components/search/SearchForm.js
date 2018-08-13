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
            <div className='form-wrapper'>
                <form className='form-container'>
                    <h4 className='text-white mt-3'>
                        Search
                    </h4>
                    <FormInput label={'Enter your search . . .'}
                               value={this.state.search}
                               onChange={value => this.updateInputField(value)}/>
                    <Link to={`${this.props.location.pathname}?${queryString.stringify(this.state)}`}>
                        Search
                    </Link>
                </form>
            </div>
        );
    }
}

export default withRouter(SearchForm);

SearchForm.propTypes = {};

SearchForm.defaultProps = {};
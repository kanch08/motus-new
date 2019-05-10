import React, {Component} from "react";
import {addCompanyInfo} from "../action/Action";
import {connect} from "react-redux";
import isRequired from "./validators";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        const {addCompanyInfo} = this.props;

        const item = e.target.name;
        const value = e.target.value;
        console.log("printing event in handle check", e);
        addCompanyInfo({[item]: value}, isRequired);
    };

    render() {
        const {company, name, label, err} = this.props;

        return (
            <div className="input-div">
                <label className="container">
                    {label}
                    ￼<input
                    name={name}
                    type="text"
                    value={company[name]}
                    onChange={this.handleChange}
                />

                </label>
                <div>
                    {err ? err.err : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {name} = ownProps;
    const err = state.errors.find(item => item.name === name);
    return {
        company: state.Company,
        err: err
    };
};

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data, validator) => dispatch(addCompanyInfo(data, validator))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

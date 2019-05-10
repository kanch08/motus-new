import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from '../assignProducts/Checkbox';
import Date from './Date';
import '../../mainstylesheet/mainstyle.css';
import {connect} from 'react-redux';


class CompanyDetails extends Component {
    constructor(props) {
        console.log("constructor called with props", props)
        super(props);
        this.state = {
            ...props.company
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {addCompanyInfo} = this.props;
        console.log("Data after Input--> ", this.state);
        this.props.nextStep();
    }


    render() {
        const {addCompanyInfo} = this.props;

        return (
            <form className="form1" onSubmit={this.handleSubmit}>
                <div className="demo-container">
                   <input type="checkbox" name="demo"/>This is a demo company
                </div>
                <div className="formwrapper">
                    <div className="company-info">
                        Company Name
                        <Input
                            name="cname"
                        />
                        Company Alias
                        <Input
                            name="calias"
                        />

                    </div>

                    <h2>Account Information</h2>
                    Industry
                    <Select
                        name="industry"
                    >
                        <option value="Agro">Agro</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </Select>

                    Account Manager
                    <Select
                        name="accountManager"
                    >
                        <option>Manager1</option>
                        <option>Manager2</option>
                        <option>Manager3</option>
                    </Select>
                    Start Date
                    <Date
                        name="startDate"
                    />

                    <h2>Contact Information</h2>
                    Country
                    <Select
                        name="country"
                    >
                        <option>USA</option>
                        <option>India</option>
                        <option>Australia</option>
                    </Select>

                    Billing Address Line1
                    <Input
                        name="address1"
                    />

                    Billing Address Line2
                    <Input
                        name="address2"
                    />

                    City
                    <Input
                        name="city"
                    />

                    <div className="state-wrapper">
                        <p>State</p>
                    <Select
                        name="state"
                    >
                        <option>Rajasthan</option>
                        <option>Kerala</option>
                        <option>New Delhi</option>
                    </Select>

                        <p>Zipcode</p>
                    <Input
                        name="zipcode"
                    />
                    </div>

                    <p>Phone</p>
                    <Input
                        name="phone"
                    />




                </div>
                <div className="container">
                    <button
                        type="button"
                        className="btn btn-secondary back-btn"
                        variant="primary"
                        onClick={this.props.backStep}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="next-btn"
                        variant="primary"
                    >
                        Next <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>

    );
    }
    }
    const mapStateToProps=(state) =>{
        const isValid = !state.errors.length
        return {
            isValid:isValid
        }
        
        
    }
    export default connect(mapStateToProps)(CompanyDetails);

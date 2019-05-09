import React, { Component,Fragment } from 'react';
import { companyConfig,contactConfig } from './inputConfig';
import { selectConfig } from './selectConfig';
import Input from './Input';
import Select from './Select';
import '../../mainstylesheet/mainstyle.css';

class CompanyDetails extends Component {
    constructor(props) {
        console.log("constructor called with props", props)
        super(props);
        this.state = {
        }
    }


    handleCallbackInput = ({item, value}) => {
        console.log("handle callback called in input")
        this.setState({
            [item]: [value]
        })

    }
    handleCallbackSelect = ({item,value}) => {
        console.log("handle callback called in input")
        this.setState({
            [item]: [value]
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {addCompanyInfo} = this.props;
        console.log("Data after Input--> ", this.state);
        this.props.nextStep();
    }


render()
{
    const{ company }=this.props;
    let {date,zipcode,phone}=this.state;

    return (
        <form className="form1" onSubmit={this.handleSubmit}>
            <div className="form-check">
                <input className="form-check-input" name="demoCompany" type="checkbox"
                       id="inlineCheckbox1" onChange={this.handleCheck}/>
                <label className="form-check-label">This a demo company.</label>
            </div>
            <div className="formwrapper">
                <div className="company-info">
                    {
                        companyConfig.map( item=>(
                            <div>
                                {item.label}<br/>
                                <input
                                    name={item.name}
                                    callback={this.handleCallbackInput}
                                />

                            </div>
                        ))
                    }

                </div>

                <div className="account-info">
                    <div className="form-group">
                        <h2>Account Information</h2>
                        {
                            selectConfig.map(item=>(
                               <div>
                                   {item.label}
                                   <select
                                       name={item.name}
                                       callback={ this.handleCallbackSelect}
                                       />
                               </div>
                            ))
                        }

                </div>

                <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" name="date" className="form-control" value={date}
                           onChange={this.handleChange}/>
                </div>

                <div className="contact-info">
                    {
                        contactConfig.map(item=>(
                            <div>
                                {item.label}<br/>
                                <input
                                    name={item.name}
                                    callback={this.handleCallback}
                                />
                            </div>
                        ))
                    }
                </div>

                        <div className="form-group">
                            <label>ZIP Code</label>
                            <input type="text" name="zipcode" className="form-control" value={zipcode}
                                   onChange={this.handleChange}/>
                        </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="form-control" value={phone}
                               onChange={this.handleChange}/>
                    </div>
                </div>
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
                    Next -->
                </button>
            </div>
        </form>

    );
}
}

export default CompanyDetails;
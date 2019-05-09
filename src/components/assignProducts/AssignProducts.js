import React, {Component, Fragment} from 'react';
import {checkboxesConfig, extraOptionsCheckboxConfig} from './checkboxesConfig';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import './stylesheetProducts/styleProduct.css';
import {DriverManagement, FixedPaymentSchedule, paymentFrequency, radioButtonConfig} from "./radioButtonsConfig";

class AssignProducts extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {};
    }

    handleCallback = ({item, isChecked}) => {
        console.log("handle callback called in radiobutton")
        this.setState({
            [item]: isChecked,
        })

    }

    handleCallbackRadio = (item, value) => {
        console.log("handle radio called")
        this.setState({
            [item]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {productData} = this.props;

        return (
            <form className="form2" onSubmit={this.handleSubmit}>
                <h2 className="products-heading">Enabled Products</h2>
                <ul className="enabled-products">
                    {
                        checkboxesConfig.map(item => (
                            <li  key={item.key}>

                                <Checkbox
                                    label={item.label}
                                    name={item.name}
                                    callback={this.handleCallback}


                                />

                                <ul class="nest--controls">

                                    {this.state.fixedRate && item.name === "fixedRate" ?
                                        <>
                                            <span class="required-forms">Select the required forms:</span>
                                            {
                                            extraOptionsCheckboxConfig.map(item => (

                                                    <li  key={item.key}>

                                                        <Checkbox
                                                            name={"form1" + item.name}
                                                            label={item.label}

                                                        />

                                                    </li>


                                                )
                                            )
                                        }
                                        </> : null
                                    }
                                </ul>
                                <ul class="nest--controls">

                                    {this.state.centMile && item.name === "centMile" ?
                                        <>
                                        <span class="required-forms">Select the required forms:</span>
                                        {
                                            extraOptionsCheckboxConfig.map(item => (
                                                <li  key={item.key}>

                                                    <Checkbox
                                                        name={"form2" + item.name}
                                                        label={item.label}/>
                                                </li>
                                            ))
                                        }
                                        </>: null
                                    }
                                </ul>
                                <ul className="nest--controls">

                                    {this.state.techOnly && item.name === "techOnly" ?
                                        extraOptionsCheckboxConfig.map(item => (
                                            <li  key={item.key}>

                                                <Checkbox
                                                    name={"form3" + item.name}
                                                    label={item.label}/>
                                            </li>
                                        )) : null
                                    }
                                </ul>


                            </li>
                        ))
                    }
                </ul>

                <h2 className="products-heading">Payment Method</h2>
                <p className="required-forms">Applies to Fixed and variable Rate and Cents per Mile Products Only</p>
                <ul className="payment">
                    {
                        radioButtonConfig.map(item => (
                            <li  key={item.key}>


                                <RadioButton
                                    label={item.label}
                                    name={item.name}
                                    callback={this.handleCallbackRadio}

                                />


                            </li>
                        ))
                    }


                </ul>

                <ul className="nest--controls">
                    {this.state.paymentMethod === "Direct Deposit" ?
                        DriverManagement.map(item => (
                            <li  key={item.key}>
                                <RadioButton
                                    name={"form1" + item.name}
                                    label={item.label}

                                />

                            </li>

                        )) : null
                    }
                </ul>
                <ul className="nest--controls">
                    {this.state.paymentMethod === "Concur" ?
                        FixedPaymentSchedule.map(item => (
                            <li  key={item.key}>
                                <RadioButton
                                    name={"form2" + item.name}
                                    label={item.label}
                                />
                            </li>
                                )) : null


                    }
                </ul>
                <ul className="nest--controls">

                    {this.state.paymentMethod === "Payroll File" ?
                        paymentFrequency.map(item => (
                            <li  key={item.key}>
                                <RadioButton
                                    name={"form3" + item.name}
                                    label={item.label}/>
                            </li>

                        )) : null
                    }


                </ul>

                <div className="container">
                    <button type="button" className="btn btn-secondary back-btn" variant="primary"
                            onClick={this.props.backStep}>Back
                    </button>
                    <button type="submit" onClick={(e) => this.handleSubmit(e)} className="next-btn"
                            variant="primary">Next -->
                    </button>
                </div>

            </form>


        )
    }
}

export default AssignProducts;
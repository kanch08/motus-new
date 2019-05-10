import React, {Component} from 'react';
import Select from '../addCompanyInfo/Select';
import RadioButton from './RadioButton';
import {monthConfig} from './radioButtonsConfig';


class AnnualTax extends Component {
    render() {

        const {productData}=this.props;
        return (
            <div className="annualTax">
                <p>How often should we calculate incurred tax?</p>
                <select
                    name="tax"
                    onChange={(e)=>this.props.handleChange}>
                    <option value="Annually">Annually</option>
                    <option value="Quaterly">Quaterly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <h5>What month does tax reporting start?</h5>
                <div className="payment">
                    <ul>
                        {
                            monthConfig.map(item => (
                                <li key={item.key}>
                                    <RadioButton
                                        name={item.name}
                                        label={item.label}
                                    />
                                    {item.label}

                                </li>

                            ))
                        }

                    </ul>

                </div>
            </div>

        );

    }
}

export default AnnualTax;

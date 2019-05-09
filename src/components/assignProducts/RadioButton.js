import React, {Component} from 'react';
import {product} from '../action/Action';
import {connect} from 'react-redux';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleCheck = (e) => {
        const {product, label} = this.props;
        let callback = this.props.callback || function () {
        };
        const item = e.target.name;
        const value = label;
        console.log("printing event in handle check", e);
        callback(item, value);
        product({[item]: value})

    }

    render() {
        const {productData, name, label} = this.props;

        return (

            <div>
                <label className="radio-container">{label}
                    <input
                        name={name}
                        type="radio"
                        defaultChecked={productData[name]}
                        onChange={this.handleCheck}
                    />
                    <span className="radio-checkmark"></span>
                </label>


            </div>

        )


    }
}

const mapStateToProps = state => ({
    productData: state.Product,
})

const mapDispatchToProps = dispatch => ({
    product: (data) => dispatch(product(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton);
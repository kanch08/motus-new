import React, {Component} from 'react';
import {connect} from 'react-redux';
import  DataTable  from './DataTable';

class Customer extends Component {
    render() {
        const {company,product,admin}=this.props;
        const adminTemp={...admin}
        delete adminTemp.forms;
        return (
            <div>
                <DataTable items={company} tableName="Company Table"/>
                <DataTable items={product} tableName="Product Table"/>
                <DataTable items={adminTemp} tableName="Admin Table"/>
            </div>
        );
    }
}

const mapStateToProps=(state)=> {

    return {

        company: state.Company,
        product: state.Product,
        admin: state.adminReducer
    }
}


export default connect(mapStateToProps)(Customer);
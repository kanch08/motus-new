import React, {Component} from "react";
import {connect} from "react-redux";
import {admin} from "../action/Action";
import AdminForm from "./admin_form";
import "./stylesheet/style.css";


class SetupAdmins extends Component {
    constructor(props) {
        super(props);
        console.log("printing props in constructor", props.adminReducer)
        this.state = {
            ...this.props.adminReducer,
            forms: props.adminReducer.forms || [{name: "form1", deleteDisabled: "true"}]
        };
    }

    handleChange = event => {
        console.log("handle changed admin form called")
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheck = e => {
        let name = e.target.name;
        this.setState({[name]: !this.state[name]});
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    onSubmit = event => {
        const {admin, history} = this.props;
        admin(this.state);
        history.push('/customer')
    }

    handleDelete = (inputName) => {
        let {forms} = this.state;
        console.log("printing inputname", inputName)
        let filteredArray = forms.filter(item => item.name !== inputName);
        this.setState({
            forms: filteredArray
        })
    }

    handleAddMore = event => {
        let newFrom = {name: "forms" + this.state.forms.length + 1, deleteDisabled: false}
        let joinedForms = [...this.state.forms, newFrom]
        this.setState({
            forms: joinedForms
        })
    }


    render() {
        return (
            <form className="setupAdmins" onSubmit={this.handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Start Date</th>
                        <th>Finace contact</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.forms.map(item => (
                                <AdminForm
                                    handleChange={this.handleChange}
                                    handleCheck={this.handleCheck}
                                    handleDelete={this.handleDelete}
                                    formName={item.name}
                                    deleteDisabled={item.deleteDisabled}
                                    key={item.name}
                                    firstInput={this.state[item.name + "firstInput"]}
                                    secondInput={this.state[item.name + "secondInput"]}
                                    thirdInput={this.state[item.name + "thirdInput"]}
                                    dateInput={this.state[item.name + "dateInput"]}


                                />
                            )
                        )
                    }

                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="6">
                            <button className="addBtn" disabled={this.state.forms.length >= 3 ? true : false}
                                    onClick={this.handleAddMore}>
                                <i className="fas fa-plus"/>
                            </button>
                        </td>

                    </tr>
                    </tfoot>
                </table>

                <div className="container">
                    <button
                        type="button"
                        className="btn btn-secondary back-btn"
                        variant="primary"
                        onClick={this.props.backStep}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="next-btn"
                        variant="primary"
                        onClick={this.onSubmit}

                    >
                        Save and View Customer -->
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    adminReducer: state.adminReducer,
    allData: state
});

const mapDispatchToProps = dispatch => ({
    admin: data => dispatch(admin(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupAdmins);

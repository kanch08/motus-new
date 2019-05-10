import React, {Component} from 'react';
import CompanyDetails from "./components/addCompanyInfo/CompanyDetails";
import AssignProducts from "./components/assignProducts/AssignProducts";
import SetupAdmins from "./components/setupAdmins/SetupAdmins";
import ProgressBar from "./components/progressBar/ProgressBar";

class FormRenderer extends Component {
    state = {
        step: 0,
        progress: 26,
        completed: "first"
    }

    nextStep = () => {
        let nextProgress = this.state.progress + 26;
        let nextCompleted;
        if (nextProgress === 52) {
            nextCompleted = "second"
        } else if (nextProgress === 78) {
            nextCompleted = "third"
        }

        this.setState({
            step: this.state.step + 1,
            progress: nextProgress,
            completed: nextCompleted
        })
    }

    backStep = () => {
        let prevProgress = this.state.progress - 26;
        let prevCompleted;
        if (prevProgress === 52) {
            prevCompleted = "second"
        } else if (prevProgress === 26) {
            prevCompleted = "first"
        }
        this.setState({
            step: this.state.step - 1,
            progress: prevProgress,
            completed: prevCompleted
        })
    }
    render() {
        const step = this.state.step;
        const {history}=this.props;
        return (
            <div class='App'>
                <section className="main-heading">
                    <h1>New Customer</h1>
                </section>
                <ProgressBar className="progress-bar" progress={this.state.progress} completed={this.state.completed}/>
            <section className="forms-container">
                {step === 0 && <CompanyDetails nextStep={this.nextStep} backStep={this.backStep}/>}
                {step === 1 && <AssignProducts nextStep={this.nextStep} backStep={this.backStep}/>}
                {step === 2 && <SetupAdmins history={history} backStep={this.backStep}/>}
            </section>
            </div>
        );
    }
}

export default FormRenderer;
import React, {Component} from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FormRenderer from './formRenderer'
import Customer from './components/Customer';
// import FormErrors from './components/FormErrors';
import Footer from './components/footer/Footer'

import './mainstylesheet/mainstyle.css';


class App extends Component {


    render() {

        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Route
                        exact
                        path="/"
                        component={FormRenderer}
                    />
                    <Route
                        exact
                        path="/customer"
                        component={Customer}
                    />


                {/* <div>*/}
                {/* <FormErrors formErrors={this.state.formErrors} />*/}
                {/*</div>*/}


                </Router>

                <footer>
                    <Footer/>

                </footer>

            </div>
        );
    }
}

export default App;
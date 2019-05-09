import React,{Component} from 'react';
import { addCompanyInfo } from '../action/Action';
import { connect } from 'react-redux';

class Select extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleChange = (e) =>{
        const{company}=this.props;
        let callback=this.props.callback || function(){};
        const item = e.target.name;
        const value = e.target.value;
        console.log("printing event in handle check",e);
        callback({item,value});
        company({[item]:value})

    }

    render(){
        const {company,name,label}=this.props;

        return(
            <div className="select-div">
               {label}
                    <select
                        name={name}
                        value="select"
                        onChange={this.handleChange}

                    />
            </div>


        )


    }
}
const mapStateToProps = state => ({
    company: state.Company,
})

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);
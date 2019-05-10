import React, {Component} from 'react';

class AdminForm extends Component {
    

    render() {
        let { firstInput, secondInput, thirdInput, dateInput } = this.props;

        const {handleChange,handleCheck,formName, handleDelete , deleteDisabled}=this.props;
        return (



                    <tr className="list">
                        <td><input type="text" name={formName+"firstInput"} value={firstInput} onChange={handleChange}/></td>
                        <td><input type="text" name={formName+"secondInput"} value={secondInput} onChange={handleChange}/></td>
                        <td><input type="text" name={formName+"thirdInput"} value={thirdInput} onChange={handleChange}/></td>
                        <td><input type="date" className="dateInput" name={formName+"dateInput"} value={dateInput} onChange={handleChange}/></td>
                        <td align="center" className="container"><input type="radio" name={formName+"radioInput"} onChange={handleCheck}/>
                        </td>

                        <td>

                            {deleteDisabled?null:  <button onClick={()=>handleDelete(formName)}> <i className="fas fa-trash-alt delete"></i></button> }
                        </td>
                    </tr>


        );
    }
}

export default AdminForm;
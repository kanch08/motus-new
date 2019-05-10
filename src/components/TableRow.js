import React from 'react';

function TableRow(props){
    const { name, value } = props;
    return (
        <tr>
            <td>{ name }</td>
            <td>{ value }</td>

        </tr>
    )
}

export default TableRow;
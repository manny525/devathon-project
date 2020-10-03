import React from 'react';

const RequestRow = (props) => {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.degree}</td>
            <td>{props.user.branch}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" className="btn_4" href="OpenRequest.html">Open Request</a>
                </div>
            </td>
        </tr>
    )
}

export default RequestRow;
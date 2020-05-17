import React, { Component } from 'react';

class DataTable extends Component {
    render(props) {
        return (
            <tr>
                <td>
                {this.props.obj.role_name}
                </td>
                <td>
                {this.props.obj._id}
                </td>

            </tr>
        );
    }
}

export default DataTable;
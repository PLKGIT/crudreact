/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import axios from "axios";
import DataTable from './data.table';

/*  React Bootstrap  */
import Table from 'react-bootstrap/Table';

/*  Create RoleView  */
class RoleView extends Component {

    state = {
        rolesCollection: []
    };

    componentDidMount() {

        axios.get('http://localhost:3000/roles')
            .then(res => {
                this.setState({ rolesCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {

        axios.get('http://localhost:3000/roles')
            .then(res => {
                this.setState({ rolesCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    dataTable() {
        return this.state.rolesCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="container mt-3">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTable()}
                    </tbody>
                </Table>
            </div>

        )

    }

}

/*  Export RoleView  */
export default RoleView;
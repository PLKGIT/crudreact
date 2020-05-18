/*  React  */
import React, { Component } from 'react';

/*  Axios Calls  */
import axios from "axios";

/*  React Bootstrap Components  */
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

/*  Create RoleDelete  */
class RoleDelete extends Component {

    state = {
        rolesCollection: {}
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

    handleDelete = (e) => {
        let id = "";
        let roleDelete = {
            'id': id
        };
        axios.delete('http://localhost:3000/roles/delete/' + roleDelete)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="container mt-3">
                <Table striped bordered hover size="sm">
                    <thead>
                            <th>No.</th>
                            <th>Role</th>
                            <th>ID</th>
                            <th>Del</th>
                    </thead>
                    <tbody>
                            {this.state.rolesCollection.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.role_name}</td>
                                    <td>{item._id}</td>
                                    <td>
                                        <Button size="sm" type="button"
                                            className="btn btn-info"
                                            onClick={(e) => { this.handleDelete(item._id) }}>
                                            Delete</Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

/*  Export RoleDelete  */
export default RoleDelete;
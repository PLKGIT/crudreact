/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import axios from "axios";

/*  React Bootstrap  */
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/*  Format Form Text  */
import { titleCase } from "title-case"

/*  Create RoleCreate  */
class RoleCreate extends Component {

    state = {
        role_name: ""
    };

    onChangeName = e => {
        
        this.setState({
            role_name: titleCase(e.target.value)
        });
    }

    handleCreate = e => {
        e.preventDefault();
        const roleObject = {
            role_name: this.state.role_name
        };
    
        axios.post('http://localhost:3000/roles/create', roleObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ role_name: '' })
    }
    render() {
        return (
            <div className="container mt-3">
                <Form onSubmit={this.handleCreate}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="roleCreate">
                            <Form.Control border="info"
                                name="role_name"
                                type="text"
                                placeholder="New Role"
                                value={this.state.role_name}
                                onChange={this.onChangeName}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="outline-info" type="submit" block>Add</Button>
                </Form>
            </div>
        )
    }
}

/*  Export RoleCreate  */
export default RoleCreate;
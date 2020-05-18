/*  React  */
import React from "react";

/*  React Bootstrap  */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*  Components  */
import RoleCreate from '../RoleCreate/index';
import RoleDelete from '../RoleDelete/index';
import RoleView from '../RoleView/index';

/*  Style  */
import "./index";

/*  Create HomeComponent  */
class HomeTabs extends React.Component {
    render() {
        return (
            <div className="tabWrapper" >
                <Tabs eventKey="home" id="hometabbed">
                    <Tab className="text-black" eventKey="home" title="Home" >
                        <div className="container mt-3">
                            <p>This application is designed to test CRUD operations in MongoDB and React.</p>
                        </div>
                    </Tab>
                    <Tab className="text-black" eventKey="Add" title="Add Role">
                        <Row>
                            <Col>
                                <RoleCreate />
                            </Col>
                            <Col>
                                <RoleView />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab className="text-black" eventKey="Edit" title="Edit Role">
                        <p>Edit Roles</p>
                    </Tab>
                    <Tab className="text-black" eventKey="Delete" title="Delete Role">
                        <Row>
                            <Col>
                                {/* <RoleDelete /> */}
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

/*  Export HomeTabs  */
export default HomeTabs;
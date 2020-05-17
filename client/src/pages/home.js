/*  React  */
import React, { Component } from 'react';

/*  Components  */
import HomeTabs from '../components/HomeTabs/index';

/*  React Bootstrap  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*  Create Home  */
class Home extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Row>
          <Col>
          <h3 className="text-primary text-center">CRUD for MERN</h3>
          </Col>
        </Row>
        <Row>
          <Col>
        <HomeTabs />
        </Col>
        </Row>
      </div>
    );

  }
}

/*  Export Home  */
export default Home;
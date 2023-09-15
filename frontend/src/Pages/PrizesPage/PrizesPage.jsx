import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

// import './styles.css';

const PrizesPage = () => {
  return (
    <div id="about"  className="PrizesPage" style={{ textAlign: 'center', width: "80%", margin: 'auto'}}>
      <h1 className="title" style={{ fontFamily: 'Mokoto', fontSize: 46, height: 35 }}>
        Prizes
      </h1>
      <Tab.Container defaultActiveKey="one" style={{paddingBottom: 30}}>
        <Col>
          <Tab.Content className="myClass">
            <Tab.Pane eventKey="one">
              {' '}
              We have lots of prizes!
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  );
};

export default PrizesPage;

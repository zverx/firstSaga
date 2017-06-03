import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import SignIn from './containers/SignIn';
import Steps from './containers/Steps';

class App extends React.Component {
  render = () => {
    return (
      <Tabs id="tabs" defaultActiveKey={1}>
        <Tab eventKey={1} title="SignIn">
          <SignIn />
        </Tab>
        <Tab eventKey={2} title="Steps">
          <Steps />
        </Tab>
      </Tabs>
    );
  }
}

export default connect()(App);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import * as actions from './actions';

const mapStateToProps = state => ({
  auth: state.auth,
});

class App extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.instanceOf(Object).isRequired,
  }

  getValue = (id) => {
    return document.getElementById(id).value;
  }

  handleAuthentification = () => {
    const login = this.getValue('login');
    const password = this.getValue('password');
    this.props.dispatch(actions.requestLogin({ login, password }));
  }

  render = () => {
    const { auth } = this.props;
    const isRequested = auth.status === 'request';
    return (
      <Grid fluid style={{ marginTop: '25px' }}>
        <Row>
          <Form horizontal>

            <FormGroup controlId="login">
              <Col componentClass={ControlLabel} sm={2}>
                Login
              </Col>
              <Col sm={8}>
                <FormControl type="text" disabled={isRequested} />
              </Col>
            </FormGroup>

            <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={2}>
                Password
                </Col>
              <Col sm={8}>
                <FormControl type="password" disabled={isRequested} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={8}>
                <Button onClick={this.handleAuthentification} disabled={isRequested}>
                  {isRequested ? 'Sign in...' : 'Sign in'}
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import * as actions from './actions';
import * as constants from './constants';

const mapStateToProps = state => ({
  signIn: state.signIn,
});

class SignIn extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    signIn: PropTypes.instanceOf(Object).isRequired,
  }

  getValue = (id) => {
    return document.getElementById(id).value;
  }

  handleChangeLogin = (e) => {
    this.props.dispatch(actions.changeLogin(e.target.value));
  }

  handleChangePassword = (e) => {
    this.props.dispatch(actions.changePassword(e.target.value));
  }

  handleAuthentification = () => {
    this.props.dispatch(actions.requestAuth({
      login: this.props.signIn.login,
      password: this.props.signIn.password,
    }));
  }

  render = () => {
    const { signIn } = this.props;
    const isRequesting = signIn.requestStatus === constants.requestStatus.REQUESTING;
    return (
      <Grid fluid style={{ marginTop: '25px' }}>
        <Row>
          <Form horizontal>

            <FormGroup controlId="login">
              <Col componentClass={ControlLabel} sm={2}>
                Login
              </Col>
              <Col sm={8}>
                <FormControl
                  type="text"
                  disabled={isRequesting}
                  value={signIn.login}
                  onChange={this.handleChangeLogin}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={8}>
                <FormControl
                  type="password"
                  disabled={isRequesting}
                  value={signIn.password}
                  onChange={this.handleChangePassword}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={8}>
                <Button
                  disabled={isRequesting}
                  onClick={this.handleAuthentification}
                >
                  {isRequesting ? 'Sign in...' : 'Sign in'}
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(SignIn);

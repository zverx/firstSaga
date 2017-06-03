import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Form, FormGroup, Button, Col, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from './actions';
import * as constants from './constants';

const mapStateToProps = state => ({
  steps: state.steps,
});

class Steps extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    steps: PropTypes.instanceOf(Object).isRequired,
  }

  handleRunSteps = () => {
    this.props.dispatch(actions.requestSteps());
  }

  render = () => {
    const { steps } = this.props;

    const isRequesting = steps.requestStatus === constants.requestStatus.REQUESTING;

    return (
      <Grid fluid style={{ marginTop: '25px' }}>
        <Row>
          <Form horizontal>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Run steps
              </Col>
              <Col sm={8}>
                <Button onClick={this.handleRunSteps} disabled={isRequesting}>
                  {isRequesting ? 'Running...' : 'Run'}
                </Button>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Result:
                </Col>
              <Col sm={2}>
                <FormControl.Static>
                  {steps.result}
                </FormControl.Static>
              </Col>
            </FormGroup>

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Steps);

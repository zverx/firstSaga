import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Form, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap';
import * as actions from './../actions';

const mapStateToProps = state => ({
  app: state.app,
});

class Steps extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.instanceOf(Object).isRequired,
  }

  handleRunSteps = () => {
    this.props.dispatch(actions.requestSteps());
  }

  render = () => {
    const { app } = this.props;

    const isRequesting = app.status === 'requesting';

    return (
      <Grid fluid style={{ marginTop: '25px' }}>
        <Row>
          <Form horizontal>

            <FormGroup>
              <Col sm={8}>
                <Col componentClass={ControlLabel} sm={2}>
                  Run steps
              </Col>
                <Button onClick={this.handleRunSteps} disabled={isRequesting}>
                  {isRequesting ? 'Running...' : 'Run'}
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Steps);

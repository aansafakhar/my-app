import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row, Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Form = (props) => {
  const {
    setEmail,
    setPassword,
    submitForm,
  } = props;
  return (
    <Container className={'main-container'}>
      <Container>
        <Row className={'row-div'}>
          <Col>
            <div className={'signup-section'}>
              <h2>
                Signup for an account
            </h2>
              <FormGroup>
                <Label for="email">Email</Label>
                <div className={'icon-group'}>
                  <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <div className={'icon-group'}>
                  <Input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
              </FormGroup>
              <button type='button' className={'btn btn-primary btn-lg'} onClick={submitForm}>
                Sign Up
            </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
Form.propTypes = {
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  submitForm: PropTypes.func,
};
export default Form;

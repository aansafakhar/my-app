import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { SIGNUP_USER } from '../../graphql/mutations/signup';
import Form from './form';

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const Signup = () => {
  const [emailInput, setEmail] = useState(null);
  const [passwordInput, setPassword] = useState(null);
  const [firstnameInput, setFirstname] = useState(null);
  const [lastnameInput, setLastname] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [signUpUser] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      toast.error('Signup successfully');
      console.log(data);
      history.push('/sign_in');
    },
    onError: (err) => {
      console.log(err);
      toast.error(`signup failed`);
      console.log(err);
    },
  });

  const submitSignUpForm = () => {
    signUpUser({
      variables: {
        email: emailInput,
        password: passwordInput,
        firstName: firstnameInput,
        lastName: lastnameInput
      },
    });
    console.log(emailInput);
    console.log(passwordInput);
    console.log(firstnameInput);
    console.log(lastnameInput);
    console.log(signUpUser);
  };

  return (
    <div>
      {!isLoading
        && <>
          <Form
            submitForm={submitSignUpForm}
            setEmail={setEmail}
            setPassword={setPassword}
            setFirstname={setFirstname}
            setLastname={setLastname}
          />
        </>}
    </div>
  );
};

export default Signup;

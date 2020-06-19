import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { SIGNIN_USER } from '../../graphql/mutations/signin';
import Form from './form';

import 'bootstrap/dist/css/bootstrap.css';

const Signin = () => {
  const [emailInput, setEmail] = useState(null);
  const [passwordInput, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signInUser] = useMutation(SIGNIN_USER);
  const history = useHistory();
  const submitSignInForm = () => {
    signInUser({
      variables: {
        email: emailInput,
        password: passwordInput,
      },
    }).then((res) => {
      toast.success('Signin successful');
      history.push("/");
    }).catch((er) => {
      toast.error('Signin unsuccessful');
    });
  };
  return (
    <div>
      {!isLoading
        && <>
          <Form
            submitForm={submitSignInForm}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </>}
    </div>
  );
};
export default Signin;

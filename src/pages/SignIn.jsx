import React, { useState, useContext, } from 'react';
import { Formik, useField, Form } from 'formik';
import { Link } from 'react-router-dom';
import signInValidationSchema from '../components/helpers/getSignInValidationSchema';
import { SignInLinkOnRegistrationForm } from '../components/styledComponents/Divs';
import { AuthContext } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import '../css/SignInCss.css';
const SignInTextField = ( {
  ...props
} ) => {
  const [ field, meta, ] = useField( props );
  return ( <div>
      <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
  </div> );
};
 const FormLoginInputField=styled(SignInTextField)`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-family: "TT Norms", "TT Norms-fallback", proxima-nova, "Helvetica Neue", Verdana, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  height: 3rem;
  letter-spacing: 0.012rem;
  margin-bottom: 0px;
  word-spacing: 0.16rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(138, 138, 138);
  border-image: initial;
  border-radius: 2px;
  padding: 1rem;
`;

export const SigninSubmitButton=styled.button`
  padding: 0.25em 1em;
  display: block;
  background: none;
  background-color: #00a400;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 100%;
  width:100%;
  overflow: hidden;
  padding-left: 32px;
  padding-right: 32px;
  text-shadow: none;
  transition: all 0.2s ease-out 0s;

  &:hover{
      border:1px solid ;
  }
`;

const SignIn = ( props ) => {
  const authContext = useContext( AuthContext );
  const [ loginSuccess, setLoginSuccess, ] = useState();
  const [ loginError, setLoginError, ] = useState();
  const [ loginLoading, setLoginLoading, ] = useState( false );
  const [ redirectOnLogin, setRedirectOnLogin, ] = useState( false );
  return (
    <div className="login-page d-flex">
       <div className="login-mod ">
          <div className="login-page-heading">
            <h5>Log in to your account</h5>
          </div>
          <div>
            <Formik
                initialValues=
                 {{
                    email: "",
                    password: "",
                 }}
                 validationSchema={signInValidationSchema}
                  onSubmit= {
                             async(values, actions) => {
                               try{
                                   const user={
                                     email:values.email,
                                     password:values.password,
                                   }
                                   if ( user.email === 'admin@test.com' && user.password === 'password' ) {
                                     setLoginLoading(true);
                                     authContext.setIsAuthenticated(true);
                                     setLoginSuccess('message');
                                     setLoginError('');
                                     setRedirectOnLogin(true);
                                   } else {
                                     authContext.setIsAuthenticated( false );
                                   }

                               }
                               catch(error) {
                                 setLoginLoading(false);
                                 const data=error;
                                 setLoginError(data);
                                 setLoginSuccess('');
                               };
                             }
                           }>
                 {
                    props => (
                         <div className="login-form">
                        {redirectOnLogin && <Redirect to='/'/>}
                        <Form>
                          <div className="form-element">
                            <FormLoginInputField className="form-control" name="email" type="email" placeholder="Email"/>
                          </div>
                          <div className="form-element">
                            <FormLoginInputField className="form-control" name="password" type="password" placeholder="Password"/>
                          </div>
                          <div className="login-btn-space">
                            <SigninSubmitButton type="submit" value="Submit" >
                              { loginLoading? 'Loading...': 'Submit'}
                            </SigninSubmitButton>
                          </div>
                        </Form>
                      </div> )
                  }
            </Formik>
          </div>
          <br/>
          <br/>
          <div className="card-footer">
            <div className="d-flex flex-wrap justify-content-center">
              <Link to="" className="mr-4 signup-footer-link">Forgot your password?</Link>
              <Link to="/registration" className="signup-footer-link">Sign Up</Link>
            </div>
          </div>
      </div>
  </div> );
}
export default SignIn;

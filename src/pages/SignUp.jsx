import React, { useState, useContext } from 'react';
import { Formik, useField,Form } from 'formik';
import { Link } from 'react-router-dom';
import signUpValidationSchema from '../components/helpers/getSignUpValidationSchema';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import styled from 'styled-components';
import '../css/SignUpCss.css';
const SignUpTextField = ( { label, ...props } ) => {
  const [ field, meta ] = useField( props );
  return ( <div>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div> );
};

const SignInLink = styled.div`
    color: #1a73e8;
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    letter-spacing: .25px;
    line-height: 36px;
    padding: 2px 10px;;
    position: relative;
    width:140px;
    height: 36px;

    &:hover{
      background-color:rgba(66,133,244,.26);
    }
`;

const ApplicationFormInputField=styled(SignUpTextField)`
  appearance: none;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  color: rgb(34, 34, 34);
  display: block;
  font-size: 1rem;
  font-weight: 500;
  height: 2.5rem;
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

  .error{

  }
`
 const SignupSubmitButton=styled.button`
    padding: 0.25em 1em;
    display: block;
    background: none;
    background-color: #00a400;
    border: none;
    border-radius: 6px;
    box-shadow: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 40px;
    width:200px;
    overflow: hidden;
    padding-left: 32px;
    padding-right: 32px;
    text-shadow: none;
    transition: all 0.2s ease-out 0s;
`;


const SignUp = ( props ) => {
  const authContext = useContext( AuthContext );
  const [ signupSuccess, setSignupSuccess ] = useState();
  const [ signupError, setSignupError ] = useState();
  const [ loginLoading, setLoginLoading ] = useState( false );
  const [ redirectOnLogin, setRedirectOnLogin ] = useState( false );
  return ( <div className="container signup-page">
        <div className="signup-page-mod mx-auto">
            <div>
                <div className="signup-page-heading">
                    <h5>Sign Up</h5>
                    <div className="text-muted">Create your Jarahe Account</div>
                </div>
                <div>
                   <Formik
                         initialValues = {
                         {
                           firstName: '',
                           lastName:"",
                           email:"",
                           phoneNumber:"",
                           password: "",
                           passwordConfirmation:""
                         }
                       }

                       validationSchema={signUpValidationSchema}

                       onSubmit = {
                         async (values, actions) => {

                           try{
                               setLoginLoading(true);
                               //create user object with values
                               const user={
                                firstName:values.firstName,
                                lastName:values.lastName,
                                email:values.email,
                                phoneNumber:values.phoneNumber,
                                password:values.password,
                                passwordConfirmation:values.passwordConfirmation
                              }

                              if ( user.email === 'admin@test.com' && user.password === 'password' ) {
                                setLoginLoading(true);
                                authContext.setIsAuthenticated(true);
                                setSignupSuccess('message');
                                setSignupError('');
                                setRedirectOnLogin(true);
                              } else {
                                authContext.setIsAuthenticated( false );
                              }

                           }
                          catch(error){
                              setLoginLoading(false);
                              const data=error;
                              setSignupError(data);
                              setSignupSuccess('');
                            };
                         }
                       } >
                       {
                         props=>(
                           <div className="signup-page-form">
                             {redirectOnLogin && <Redirect to='/'/>}
                             <Form>
                               <div className="form-row">
                                 <div className="col-6">
                                   <ApplicationFormInputField className="form-control" name="firstName" type="text" placeholder="First name"/>
                                 </div>
                                 <div className="col-6">
                                   <ApplicationFormInputField className="form-control" name="lastName" type="text" placeholder="Last name"/>
                                 </div>
                               </div>
                               <br/>
                               <div className="form-row">
                                 <div className="col-12">
                                   <ApplicationFormInputField className="form-control" name="email" type="email" placeholder="Email"/>
                                 </div>
                               </div>
                               <br/>
                               <div className="form-row">
                                 <div className="col-6">
                                   <ApplicationFormInputField className="form-control" name="password" type="password" placeholder="Password" />
                                 </div>
                                 <div className="col-6">
                                   <ApplicationFormInputField className="form-control" name="passwordConfirmation" type="password" placeholder="Confirm password"/>
                                 </div>
                               </div>
                               <br/>
                               <div className="signup-form-bottom">
                                 <span className="agreement">
                                   By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.
                                 </span>
                                 <div className="mt-2">
                                    <SignupSubmitButton type="submit" value="Submit" className="btnSignup">
                                        {loginLoading? 'Loading..':'Sign Up'}
                                    </SignupSubmitButton>
                                 </div>
                               </div>
                             </Form>
                           </div>
                       )}
                   </Formik>
                </div>
                  <br/>
            <div className="signin-link-on-signup-form">Already registered? <SignInLink ><Link to="/login">Sign in instead</Link></SignInLink></div>
        </div>
    </div>
  </div> );
}
export default SignUp;
/*

<Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  <br/>
  <Form.Row>
    <Col>
      <Form.Control placeholder="email" />
    </Col>
  </Form.Row>
  <br/>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Password" />
    </Col>
    <Col>
      <Form.Control placeholder="Confirm Password" />
    </Col>
  </Form.Row>






*/

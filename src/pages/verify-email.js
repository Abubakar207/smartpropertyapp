import React, { Fragment,useState,useEffect } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";
import { Link, Redirect, useHistory } from "react-router-dom";
import validator from 'validator';
import axios from 'axios'
const VerifyEmail = () => {
  let history = useHistory();

  let info = localStorage.getItem('info')
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("");
  const [otpError, setOtpError] = useState("");
  const [Errors, setErrors] = useState("");
  let token = localStorage.getItem('access_token')
  const getUser = useEffect(()=>{
  axios
  .get("http://127.0.0.1:8000/api/user/profile/", { headers: {"Authorization" : `Bearer ${token}`} })
  .then((res) => {
    setEmail(res.data.email)
  })
  .catch((err) => {
   console.log(err.response.data)
   setErrors("User token is expired.")
  });
},[])

const verifyOtpHandler =()=>{
  console.log('Calling Otp Api')
  let access = localStorage.getItem('access_token')
  //console.log(access)
  let config = {
    headers: {
      'Authorization': 'Bearer ' + access
    }
  }
  axios
  .post("http://127.0.0.1:8000/api/user/verify-email/",{ email:email,otp:otp },config)
  .then((res) => {
    history.push("/home",true);
  })
  .catch((err) => {
    console.log(err.response.data)
    if (err.response.data.errors.error.hasOwnProperty("non_field_errors")){
      setOtpError(err.response.data.errors.error.non_field_errors);
      setErrors("Please enter valid otp code.")
    }
  else setOtpError("");
  });
}


  const OtpFormHandler=(e)=>{
    e.preventDefault();
    if( validator.isEmpty(otp)){
    setOtpError("Please enter otp code ")
    }else
    {
      if(!validator.isEmpty(email))
      {
        setErrors()
        verifyOtpHandler()
        console.log(email)
      }
    }
   
  }
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Forgot>
        <Forgot.Container>
          <Forgot.Content>
            <Forgot.Header>
              <Forgot.Title>Verify Otp code</Forgot.Title>
            </Forgot.Header>
            <Forgot.InnerContent>
              <Form onSubmit={OtpFormHandler}>
              <h5 style={{ color: "red" }}> {Errors}</h5>
                <Form.FormGroup>
                  <Form.Label>  
                    {info}
                  </Form.Label>
                  <Form.InputNumber
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  />
                    <h6 style={{ color: "red" }}>{otpError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Submit" />
                </Form.FormGroup>
              </Form>
            </Forgot.InnerContent>
          </Forgot.Content>
        </Forgot.Container>
      </Forgot>
      <FooterContainer />
    </Fragment>
  );
};

export default VerifyEmail;

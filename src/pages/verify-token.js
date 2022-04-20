import React, { Fragment,useState,useEffect } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";
import { Link, Redirect, useHistory } from "react-router-dom";
import validator from 'validator';
import axios from 'axios'
const VerifyToken = () => {
  let history = useHistory();

  let info = localStorage.getItem('info')
  const [tokenKey, setTokenKey] = useState("")
  const [tokenError, setTokenError] = useState("");
  const [Errors, setErrors] = useState("");
  

const verifyTokenHandler =()=>{
 
  axios
  .post("http://127.0.0.1:8000/api/user/verify-token/",{ otp:tokenKey })
  .then((res) => {
    localStorage.setItem("access_token", res.data.token.access);
    localStorage.setItem("refresh_token", res.data.token.refresh);
    history.push("/new-password",true);
  })
  .catch((err) => {
      setTokenError('')
      setErrors(err.response.data.error)
  });
}


  const TokenFormHandler=(e)=>{
    e.preventDefault();
    if( validator.isEmpty(tokenKey)){
        {
            setTokenError("Please enter your token .")
            setErrors('')
        }
    
    }else
    {
        verifyTokenHandler()
    }
   
  }
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Forgot>
        <Forgot.Container>
          <Forgot.Content>
            <Forgot.Header>
              <Forgot.Title>Verify your token</Forgot.Title>
            </Forgot.Header>
            <Forgot.InnerContent>
              <Form onSubmit={TokenFormHandler}>
              <h5 style={{ color: "red" }}> {Errors}</h5>
                <Form.FormGroup>
                  <Form.Label>  
                    {info}
                  </Form.Label>
                  <Form.InputNumber
                  onChange={(e) => setTokenKey(e.target.value)}
                  value={tokenKey}
                  />
                    <h6 style={{ color: "red" }}>{tokenError}</h6>
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

export default VerifyToken;

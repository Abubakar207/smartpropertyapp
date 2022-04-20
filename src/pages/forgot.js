import React, { Fragment, useState } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";
import { Link, Redirect, Route,useHistory } from "react-router-dom";
import VerifyToken from "./verify-token";
import validator from "validator";
import PrivateRoute from "../PrivateRoute";
import axios from "axios";

const Forgott = () => {
  let Url=false
  let history = useHistory();
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [Errors, setErrors] = useState("");
  const [move, setMove] = useState("");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  const ForgotFormHandler = (e) => {
    e.preventDefault();
    if (validator.isEmpty(Email)) {
      setEmailError("Email  must be required.")
      setErrors('')
    }
    else {
      setEmailError("");
      axios
        .post("http://127.0.0.1:8000/api/user/send-reset-password-email/", {
          email: Email,
        })
        .then((res) => {
          history.push("/verify-token",true);
        })
        .catch((err) => {
          if (err.response.data.errors.hasOwnProperty("non_field_errors")) {
            setErrors(err.response.data.errors.non_field_errors);
            setEmailError("enter registered email address.");
          }
        });
    }
  };

    return (
      
      <Fragment>

        <HeaderContainer bg="false" />
        <Forgot>
          <Forgot.Container>
            <Forgot.Content>
              <Forgot.Header>
                <Forgot.Title>Reset Your Password</Forgot.Title>
              </Forgot.Header>
              <Forgot.InnerContent>
                <Form onSubmit={ForgotFormHandler}>
                  <h5 style={{ color: "red" }}> {Errors}</h5>
                  <Form.FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Input
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
                    />
                    <h6 style={{ color: "red" }}>{EmailError}</h6>
                  </Form.FormGroup>
                  <Form.FormGroup>
                    <Form.SubmitInput type="submit" value="Send Reset Token" />
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

export default Forgott;

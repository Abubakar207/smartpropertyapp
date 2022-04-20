import React, { Fragment, useState } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form } from "../components";
import Home from "./home";
import axios from "axios";
import validator from "validator";
import Cookies from "universal-cookie";
import { Link, Redirect, useHistory } from "react-router-dom";

const cookies = new Cookies();
const Loginn = () => {
  let history = useHistory();

 
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");;
  const [PasswordError, setPasswordError] = useState("");
  const [PasswordError2, setPasswordError2] = useState("");
  const [Errors, setErrors] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");

  const ChangePasswordFormHandler = (e) => {
    e.preventDefault();
    if (validator.isEmpty(Password) || validator.isEmpty(Password2)) {
        validator.isEmpty(Password) ? setPasswordError("Password  must be required.") :setPasswordError("");
        validator.isEmpty(Password2) ? setPasswordError2("Confirm Password  must be required."):  setPasswordError2("");
     
    } else if (Password != Password2) {
      setErrors("Confirm Password not matched .");
      setPasswordError('')
      setPasswordError2('')
      
    } else {
      setPasswordError("");
      setPasswordError2("");
      let access = localStorage.getItem('access_token')
      console.log(access)
      let config = {
        headers: {
          'Authorization': 'Bearer ' + access
        }
      }
      axios
      .post("http://127.0.0.1:8000/api/user/changepassword/", {
        password: Password,
        password2: Password2,
      }, config)
      .then((res) => {
          setErrors('')
          setPasswordError('')
          setPasswordError2('')
          console.log(res.data.msg)
        setSuccessMsg(res.data.msg)
      })
      .catch((err) => {
        console.log(err.response.data.error)
        setErrors(err.response.data.error)
      });
    }

  }

  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Login>
        <Login.Container>
          <Login.Content>
            <Login.Header>
              <Login.Title>Change Password</Login.Title>
            </Login.Header>
            <Login.InnerContent>
              <Form onSubmit={ChangePasswordFormHandler}>
                <h5 style={{ color: "red" }}> {Errors}</h5>
                <h5 style={{ color: "green" }}> {SuccessMsg}</h5>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.InputPassword
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                  />
                  <h6 style={{ color: "red" }}>{PasswordError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.InputPassword
                    onChange={(e) => setPassword2(e.target.value)}
                    value={Password2}
                  />
                  <h6 style={{ color: "red" }}>{PasswordError2}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Change" />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Text>
            Already Have Account ?{" "}
                <Login.Anchor to="/">Login</Login.Anchor>
              </Login.Text>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;

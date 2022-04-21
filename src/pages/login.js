import React, { Fragment, useState } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form } from "../components";
import Home from "./home";
import axios from "axios";
import validator from "validator";
import { Link, Redirect, useHistory } from "react-router-dom";


const Loginn = () => {
  let history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMeesage] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [data, setData] = useState([]);
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("WalletAddress");
  const LoginFormHandler = (e) => {
    e.preventDefault();
    if (Email == "") {
      setEmailError("Email must be required.");
      if (Password == "") setPasswordError("Password must be required.");
      setMeesage("");
    } else if (Password == "") {
      setEmailError("");
      setPasswordError("Password must be required.");
      setMeesage("");
    } else {
      setEmailError("");
      setPasswordError("");
      axios
      .post("http://127.0.0.1:8000/api/user/login/", {
        email: Email,
        password: Password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token.access);
        localStorage.setItem("refresh_token", res.data.token.refresh);
        history.push("/home",true);
        console.log(res.data)
      })
      .catch((err) => {
        if (err.response.data.errors.hasOwnProperty("non_field_errors"))
          setMeesage(err.response.data.errors.non_field_errors);
        else setMeesage("");
        console.log(err.response.data)
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
              <Login.Title>Login</Login.Title>
            </Login.Header>
            <Login.InnerContent>
              <Form onSubmit={LoginFormHandler}>
                <h5 style={{ color: "red" }}> {Message}</h5>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  />
                  <h6 style={{ color: "red" }}>{EmailError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.InputPassword
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                  />
                  <h6 style={{ color: "red" }}>{PasswordError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Login" />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Footer>
              <Login.Text>
                <Login.Anchor to="/forgot-password">
                  Forgot Password ?
                </Login.Anchor>
              </Login.Text>
              <Login.Text>
                Don't have an Account ?{" "}
                <Login.Anchor to="/signup">Sign Up</Login.Anchor>
              </Login.Text>
            </Login.Footer>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;

import React, { Fragment,useState } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from 'axios'
import validator from 'validator';
import { Link, Redirect, useHistory } from "react-router-dom";

const Signupp = () => {
 
  let history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Cnic, setCnic] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");

  const [Message, setMeesage] = useState("");
  const [NameError, setNameError] = useState("");
  const [PhoneError, setPhoneError] = useState("");
  const [CnicError, setCnicError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [PasswordError2, setPasswordError2] = useState("");

  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  const SignupFormHandler=(e)=>{
    // console.log(Name,Email,Phone,Cnic,Password,Password2)
    e.preventDefault();
    if ( validator.isEmpty(Email) || validator.isEmpty(Password) || validator.isEmpty(Password2) || validator.isEmpty(Name) || validator.isEmpty(Phone) || validator.isEmpty(Cnic)) {
     
      validator.isEmpty(Email) ? setEmailError("Email  must be required.") : setEmailError("");
      validator.isEmpty(Password) ? setPasswordError("Password  must be required.") :setPasswordError("");
      validator.isEmpty(Password2) ? setPasswordError2("Confirm Password  must be required."):  setPasswordError2("");
      validator.isEmpty(Name) ? setNameError("Name  must be required.") : setNameError("");
      validator.isEmpty(Phone) ? setPhoneError("Phone Number  must be required.") : setPhoneError("");
      validator.isEmpty(Cnic) ? setCnicError("Cnic   must be required.") : setCnicError("");
      setMeesage("");
    }
    else if( Password.localeCompare(Password2)){
      setPasswordError2("Confirm Password not  matched.")
    }
     else {
       setEmailError("");setPasswordError("");setPasswordError2("");setNameError("");setPhoneError("");setCnicError("");
      
      axios
      .post("http://127.0.0.1:8000/api/user/register/", {
        email: Email,
        name:Name,
        phone:Phone,
        cnic:Cnic,
        password: Password,
        password2:Password2,
      })
      .then((res) => {
        setEmailError("");setPasswordError("");setPasswordError2("");setNameError("");setPhoneError("");setCnicError("");
        setMeesage("")
        localStorage.setItem("access_token", res.data.token.access);
        localStorage.setItem("refresh_token", res.data.token.refresh);
        localStorage.setItem("info", res.data.msg);
        history.push("/verify-email",true);
        console.log(res.data)
      })
      .catch((err) => {
        setMeesage("")
        if(typeof err.response.data.errors.email != "undefined"){
          setEmailError(err.response.data.errors.email)
          setMeesage(err.response.data.errors.email)
        }
        if(typeof err.response.data.errors.non_field_errors != "undefined"){
          setPasswordError2(err.response.data.errors.non_field_errors)
          setMeesage(err.response.data.errors.non_field_errors)
        }
       console.log(err.response.data)
      });
    }
  }
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Signup</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form onSubmit={SignupFormHandler}> 
              <h5 style={{ color: "red" }}> {Message}</h5>
                <Form.FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Input 
                   onChange={(e) => setName(e.target.value)}
                   value={Name}
                  />
                    <h6 style={{ color: "red" }}>{NameError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  />
                     <h6 style={{ color: "red" }}>{EmailError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Phone</Form.Label>
                  <Form.InputNumber
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                  />
                    <h6 style={{ color: "red" }}>{PhoneError}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Cnic</Form.Label>
                  <Form.InputNumber
                  onChange={(e) => setCnic(e.target.value)}
                  value={Cnic}
                  />
                    <h6 style={{ color: "red" }}>{CnicError}</h6>
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
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.InputPassword
                   onChange={(e) => setPassword2(e.target.value)}
                   value={Password2}
                  />
                    <h6 style={{ color: "red" }}>{PasswordError2}</h6>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Signup" />
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Already Have Account ?{" "}
                <Signup.Anchor to="/">Login</Signup.Anchor>
              </Signup.Text>
            </Signup.Footer>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
  );
};

export default Signupp;

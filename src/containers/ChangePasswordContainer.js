import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import { Password, Form } from "../components";
import { Alert } from "react-bootstrap";
const ChangePasswordContainer = () => {
  const [olpassword, setoldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [PasswordError2, setPasswordError2] = useState("");
  const [PasswordError3, setPasswordError3] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const changePasswordHandler = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(password) ||
      validator.isEmpty(password2) ||
      validator.isEmpty(olpassword)
    ) {
      validator.isEmpty(olpassword)
        ? setPasswordError3("Old password  field must be required.")
        : setPasswordError3("");
      validator.isEmpty(password)
        ? setPasswordError("Password  must be required.")
        : setPasswordError("");
      validator.isEmpty(password2)
        ? setPasswordError2("Confirm Password  must be required.")
        : setPasswordError2("");
    } else if (password.localeCompare(password2)) {
      setPasswordError2("Confirm Password not  matched.");
    } else {
      setPasswordError("");
      setPasswordError2("");
      setPasswordError3("");
      let token = localStorage.getItem("access_token");
      axios
        .post(
          "http://127.0.0.1:8000/api/user/changepassword/",
          { password: password, password2: password2 },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setMsg(res.data.msg)
          setShow(true)
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  
  return (
    <Password>
      <Form onSubmit={changePasswordHandler}>
        <Form.FormGroup>
           {show && (
             <Alert variant="primary" onClose={() => setShow(false)} dismissible>
             <Alert.Heading>{msg}</Alert.Heading>
           </Alert>
           )}
          <Form.Label>Old Password</Form.Label>
          <Form.InputPassword
            onChange={(e) => setoldPassword(e.target.value)}
            value={olpassword}
          />
         
          <h6 style={{ color: "red" }}>{PasswordError3}</h6>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>New Password</Form.Label>
          <Form.InputPassword
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <h6 style={{ color: "red" }}>{PasswordError}</h6>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Confirm New Password</Form.Label>
          <Form.InputPassword
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          <h6 style={{ color: "red" }}>{PasswordError2}</h6>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.SubmitInput value="Change Password" />
        </Form.FormGroup>
      </Form>
    </Password>
  );
};

export default ChangePasswordContainer;

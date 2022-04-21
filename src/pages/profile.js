import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "../components";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import { DashboardContainer } from "../containers";
import { Profile, Form } from "../components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Modal ,Alert } from "react-bootstrap";
const UserProfile = () => {
  let history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Cnic, setCnic] = useState("");

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let token = localStorage.getItem("access_token");
  const getUser = useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setEmail(res.data.email);
        setName(res.data.name);
        setPhone(res.data.phone);
        setCnic(res.data.cnic);
        localStorage.setItem("uid", res.data.id);
        console.log(res.data);
      })
      .catch((err) => {
        history.push("/");
        console.log(err.response.data);
      });
  }, []);
  const UpdateProfileHandler = ()=>{
    let token = localStorage.getItem("access_token");
    axios
      .post("http://127.0.0.1:8000/api/user/update-profile/", 
      { name:Name ,email:Email,phone:Phone,cnic:Cnic}
      , 
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMsg(res.data.msg)
         handleShow()
        console.log(res.data);
      })
      .catch((err) => {
        // history.push("/");
        console.log(err.response.data);
      });
  }
  
  return (
    <>
      <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Account">
            <Profile>
              <Form onSubmit={UpdateProfileHandler}>
              {show && (
             <Alert variant="primary" onClose={() => setShow(false)} dismissible>
             <Alert.Heading>{msg}</Alert.Heading>
           </Alert>
           )}
                <Profile.Avatar>
                  <Profile.Title>Profile Picture</Profile.Title>
                  <Profile.AvatarContent>
                    <Profile.Image source="default.jpg" />
                  </Profile.AvatarContent>
                </Profile.Avatar>
                <Profile.Bio>
                  <Profile.BioTop>
                    <Form.FormGroup>
                      <Form.Label>Name</Form.Label>
                      <Form.Input
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>Email</Form.Label>
                      <Form.Input 
                         disabled
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={Email}
                      />
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>Phone</Form.Label>
                      <Form.InputNumber
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        value={Phone}
                      />
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>Cnic</Form.Label>
                      <Form.InputNumber
                        type="text"
                        onChange={(e) => setCnic(e.target.value)}
                        value={Cnic}
                      />
                    </Form.FormGroup>
                  </Profile.BioTop>
                </Profile.Bio>
                <Profile.Social>
                  <Form.FormGroup>
                    <Form.SubmitInput value="Save Changes" />
                  </Form.FormGroup>
                </Profile.Social>
              </Form>
            </Profile>
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>

    </>
  );
};

export default UserProfile;

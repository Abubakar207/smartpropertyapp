import React ,{useState,useEffect} from "react";
import { Property, Form } from "../components";
import axios from 'axios'
const ContactAgentContainer = ({ property }) => {
   
  const [userId, setUserId] = useState(property)
  const [data, setData] = useState("");
  const [Name, setName] = useState("Abubakar");
  const [Phone, setPhone] = useState("9234214567");
  let token = localStorage.getItem('access_token')


  const getUser = useEffect(()=>{
   
      axios
      .get(`http://127.0.0.1:8000/api/user/1`, { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => {
        console(res.data)
      })
      .catch((err) => {
       console.log(err.response)
     //  alert("User token is expired.")
      });
    }
,[])
  return (
    <Property.Contact>
      <Property.ContactHeader>
        
        <Property.ContactItem>
          <Property.Subtitle> <h3> {Name}</h3> </Property.Subtitle>
          <Property.ContactList>
            <Property.ListItem>
              <Property.Text> Phone :<h5>+{Phone} </h5></Property.Text>
            </Property.ListItem>
          </Property.ContactList>
        </Property.ContactItem>
      </Property.ContactHeader>
      <Property.ContactContent>
        <Property.ContactContainer>
          <Form>
            <Form.FormGroup>
              <Form.Input type="text" placeholder="Name" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Input type="text" placeholder="Email" />
            </Form.FormGroup>

            <Form.FormGroup>
              <Form.Input type="text" placeholder="Phone Number" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.TextArea
                placeholder="I would love to know more about this property"
                name=""
                id=""
                cols="24"
                rows="8"></Form.TextArea>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.SubmitInput type="submit" value="Send Message" />
            </Form.FormGroup>
          </Form>
        </Property.ContactContainer>
      </Property.ContactContent>
    </Property.Contact>
  );
};

export default ContactAgentContainer;

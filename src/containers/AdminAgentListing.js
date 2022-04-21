import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData,
  PropertyHead,
} from "../partials/admin_listing_partial";
import {  useHistory } from "react-router-dom";

import { Table, AdminListing } from "../components";

const AdminAgentListing = () => {
  let history = useHistory();

const [PropertyData, setPropertyData] = useState([]);
let UserId = localStorage.getItem('uid')
 useEffect(() => {
  axios
    .get("http://localhost:8000/api/property/")
    .then((res) => {
     // console.log(res.data)
      setPropertyData(res.data.filter(data => Number(data.UserId) === Number(UserId) ))
      console.log(PropertyData)
    })
    .catch((err) => {
      console.log(err.response);
    });
}, []);
const moreDetailPropertyHandler = (id) =>{
history.push(`/property/${id}`,true);
}
  return (
    <AdminListing>
      <AdminListing.Top>
    
      </AdminListing.Top>
      <AdminListing.Content>
        <Table>
          <PropertyHead />
          <Table.Body>
          <Table.Head>
         </Table.Head>
            {
                 PropertyData.map((property)=>(
                  <Table.Row>
                  <Table.Data>{property.PropertyTitle}</Table.Data>
                  <Table.Data>{property.Price}</Table.Data>
                  <Table.Data>{property.Category}</Table.Data>
                  <Table.Data>{property.SubCategory}</Table.Data>
                  <Table.Data>
                    <Table.Button onClick={()=> moreDetailPropertyHandler(property.id)} >
                       More
                    </Table.Button>
                  </Table.Data>
                  <Table.Data>
                    <Table.Button>
                    Update
                    </Table.Button>
                  </Table.Data>
                  <Table.Data>
                    <Table.Button>
                    Delete
                    </Table.Button>
                  </Table.Data>
                </Table.Row>
                 ))

            }
          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};

export default AdminAgentListing;

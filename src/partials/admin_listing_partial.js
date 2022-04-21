import React, { useState } from "react";

import { Table, AdminListing, Form } from "../components";

const PropertyHead = () => {
  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Title</Table.Data>
        <Table.Data>Price </Table.Data>
        <Table.Data>Category</Table.Data>
        <Table.Data>Listed</Table.Data>
        <Table.Data>Action</Table.Data>
        <Table.Data></Table.Data>
        <Table.Data></Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData = (property ) => {
    console.log(property)
 
  return (
    <Table.Row>
      <Table.Data>{property.Title}</Table.Data>
      <Table.Data>{property.Price}</Table.Data>
      <Table.Data>{property.Category}</Table.Data>
      <Table.Data>{property.SubCategory}</Table.Data>
      <Table.Data>
        <Table.Button >
           More
        </Table.Button>
      </Table.Data>
   
      <Table.Data>
        <Table.Button>
        Delete
        </Table.Button>
      </Table.Data>
      <Table.Data>
        <Table.Button>
        Update
        </Table.Button>
      </Table.Data>
    </Table.Row>
  );
};

const AdminListingHeader = () => {
  return (
    <AdminListing.Header>
     
    </AdminListing.Header>
  );
};

export { AdminListingHeader, PropertyHead, PropertyData };

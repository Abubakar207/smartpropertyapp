import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";

import { FormWrapper, Form } from "../components";

import { priceFormat } from "../helpers/helper_functions";

const AdvancedSearchContainer = () => {
  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.propertyList);

  const price = properties.map(
    (property) => +property.price.split(",").join("")
  );

  const maxPrice = Math.max.apply(null, price),
    minPrice = Math.min.apply(null, price);

  const categories = [
    ...new Set(properties.map((property) => property.category)),
  ];

  const listedIn = [
    ...new Set(properties.map((property) => property.listedIn)),
  ];

  const counties = [
    ...new Set(properties.map((property) => property.address.county)),
  ];
  const rooms = [
    ...new Set(properties.map((property) => property.features.bedrooms)),
  ].sort((a, b) => a - b);

  const [priceRange, setPriceRange] = useState(0);
  const [listed, setlisted] = useState('');
  const [category, setcategory] = useState('');
  const [city, setCity] = useState('');
  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
  const SearchFormHandler = (e) =>{
    localStorage.setItem("listed",listed );
    localStorage.setItem("category",category );
    localStorage.setItem("city",city );
    localStorage.setItem("price",priceRange );
   // e.preventDefault();
  }
  return (
    <FormWrapper>
      <FormWrapper.Header>
        <FormWrapper.Title>Advanced Search</FormWrapper.Title>
      </FormWrapper.Header>
      <FormWrapper.Content>
        <Form onSubmit={SearchFormHandler}>
        <Form.FormGroup>
          <Form.Select 
              name="city"
              value={city}
              onChange={(e) => {
              setCity(e.target.value);
              }}>
              <Form.Option defaultValue>Cities</Form.Option>
                <Form.Option >Lahore</Form.Option>
                <Form.Option >Karachi</Form.Option>
                <Form.Option >Faislabad</Form.Option>
                <Form.Option >Islamabad</Form.Option>
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select 
              name="listed"
              value={listed}
                        onChange={(e) => {
                          setlisted(e.target.value);
                        }} >
              <Form.Option defaultValue>Types</Form.Option>
              <Form.Option>Rental</Form.Option>
              <Form.Option>Sales</Form.Option>
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
          <Form.Select 
              name="category"
              value={category}
              onChange={(e) => {
              setcategory(e.target.value);
              }}>
              <Form.Option defaultValue>Categories</Form.Option>
              <Form.Option>Apartment</Form.Option>
                <Form.Option>House</Form.Option>
                 <Form.Option>Office</Form.Option>
            </Form.Select>
          </Form.FormGroup>
          
          <Form.FormGroup>
            <Form.Span>
              {" "}
              Price range: Rs {priceFormat(+priceRange)} to Rs{" "}
              {priceFormat(500000000)}
            </Form.Span>
            <Form.RangeInput
              type="range"
              min={minPrice}
              max={500000000}
              name="price"
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value);
              }}
            />
          </Form.FormGroup>
          
          <Form.FormGroup>
            <Form.SubmitInput type="submit" value="Search" />
          </Form.FormGroup>
        </Form>
      </FormWrapper.Content>
    </FormWrapper>
  );
};

export default AdvancedSearchContainer;

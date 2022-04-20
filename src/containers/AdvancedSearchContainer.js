import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";

import { FormWrapper, Form } from "../components";

import { priceFormat } from "../helpers/helper_functions";

const AdvancedSearchContainer = () => {
  const dispatch = useDispatch();
  const [city,SetCity] = useState("")
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
  
  const OnFilterSubmit = (e)=>{
     alert(city)
    e.preventDefault()
  }
  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
  return (
    <FormWrapper>
      
      <FormWrapper.Content>
        <Form onSubmit={OnFilterSubmit}>
        <FormWrapper.Title>Advanced Search</FormWrapper.Title>
          <Form.FormGroup>
            <Form.Select onChange={(e)=>SetCity(e.target.value)} value={city}>
              <Form.Option defaultValue>Location</Form.Option>
              <Form.Option>Lahore</Form.Option>
              <Form.Option >Karachi</Form.Option>
            </Form.Select>
          </Form.FormGroup>
    
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Categories</Form.Option>
              {categories.map((category) => (
                <Form.Option key={category}>{category}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Bed Rooms</Form.Option>
              {rooms.map((room) => (
                <Form.Option key={Math.random(room)}>{room}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Span>
              {" "}
              Price range: Ksh {priceFormat(+priceRange)} to Ksh{" "}
              {priceFormat(maxPrice)}
            </Form.Span>
            <Form.RangeInput
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={({ target: { value } }) => setPriceRange(value)}
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Input type="text" placeholder="Search Term" />
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

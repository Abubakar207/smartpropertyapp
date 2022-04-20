import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProperty,
  getFeaturedList,
} from "../redux/actions/propertiesAction";
import { Section, Property } from "../components";
import {
  ContactAgentContainer,
  PropertyRelatedContainer,
  FooterContainer,
} from "../containers";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import axios from 'axios'
import { Agents } from "../components";
const Listing = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();

  const singleProperty = useSelector((state) => state.property);

  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;

  const { property } = singleProperty;

  // To display featured properties except one with the id
  const filteredFeatured = featuredProperties.filter(
    (property) => property.id !== +id
  );

  const [PropertyData,setPropertyData] = useState([])
  const getUser = useEffect(()=>{
  axios.get(`http://localhost:8000/api/property/${id}`)
  .then((res) => {
    console.log(res.data)
    setPropertyData(res.data)
    console.log(PropertyData)
  })
  .catch((err) => {
   console.log(err.response.data)
  });
},[])


  const [featuresShown, setContentShown] = useState(false);
  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

    const [addressShown, setaddressShown] = useState(false);
    const addressHandler = () => {
      setaddressShown((previousState) => !previousState);
    };


    const [descriptionShown, setdescriptionShown] = useState(false);
    const descriptionShownHandler = () => {
      setdescriptionShown((previousState) => !previousState);
    };

  return (
    <>
      <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Property.Header>
            <Property.HeaderLeft>
              <Property.Title>{PropertyData.PropertyTitle}</Property.Title>
              <Property.Location>
                <Property.Icon name="fas fa-map-marker-alt"></Property.Icon>
                <Property.Text>{PropertyData.City}</Property.Text>
              </Property.Location>
            </Property.HeaderLeft>
            <Property.HeaderRight>
              <Property.Title>
                Rs {"   "}
                {PropertyData.Price}
                <Property.Span>
                  {PropertyData.SubCategory === "rental" ? "/ Month" : ""}
                </Property.Span>
              </Property.Title>
            </Property.HeaderRight>
          </Property.Header>
          <Property.Content>
            <Property.Left>

      <Property.Gallery>
      <Property.ImageContainer>
      <img src={PropertyData.image1} width={380} height={250} ></img>
    
      </Property.ImageContainer>
      <Property.ImageContainer>
      <img src={PropertyData.image2} width={380} height={250} ></img>
      </Property.ImageContainer>
      <Property.ImageContainer>
      <img src={PropertyData.image3} width={380} height={250} ></img>
      </Property.ImageContainer>
      <Property.ImageContainer>
      <img src={PropertyData.image1} width={380} height={250} ></img>
      </Property.ImageContainer>
    </Property.Gallery>



    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Details and Features</Property.InfoTitle>
        <Property.Icon
          name={featuresShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={featuresShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Bedrooms : </Property.Span>
               {PropertyData.BedRooms}
          
          </Property.Text>
          <Property.Text>
            <Property.Span>Bathrooms : </Property.Span>
            {PropertyData.BathRooms}
          </Property.Text>
        </Property.InfoItem>

        <Property.InfoItem>
        <Property.Text>
            <Property.Span>Land Area : </Property.Span>
            {PropertyData.LandArea}   {PropertyData.Unit}
          </Property.Text>
          <Property.Text>
            <Property.Span>Status : </Property.Span>
            {'Status' ? "Active" : "Not Active"}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>

             
    <Property.Info>
      <Property.InfoHeader onClick={addressHandler}>
        <Property.InfoTitle>Address</Property.InfoTitle>
        <Property.Icon
          name={addressShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={addressShown}>
        <Property.InfoItem>
          <Property.Text>
            {/* St #39 , Tember Marker , Lahore */}
            {PropertyData.Address}
          </Property.Text>
          <Property.Text>
            <Property.Span>City : </Property.Span>
            {PropertyData.City}
          </Property.Text>
          <Property.Text>
            <Property.Span>ZipCode : </Property.Span>
            {PropertyData.ZipCode}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Longitude  : </Property.Span>
            {PropertyData.Longitude}
          </Property.Text>
          <Property.Text>
            <Property.Span>Latitude : </Property.Span>
            {PropertyData.Latitude} 
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
         
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>


    <Property.Info>
      <Property.InfoHeader onClick={descriptionShownHandler}>
        <Property.InfoTitle>Property Description</Property.InfoTitle>
        <Property.Icon
          name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent block="true" contentShown={descriptionShown}>
        <Property.Text>{PropertyData.Description}</Property.Text>
      </Property.InfoContent>
    </Property.Info>


            </Property.Left>

            <Property.Right>

              <ContactAgentContainer property={property} />

              {/* <PropertyRelatedContainer
                property={property}
                featured={filteredFeatured}
              /> */}

            </Property.Right>
          </Property.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;

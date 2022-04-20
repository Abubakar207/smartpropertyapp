import React, { useState } from "react";
import { Property } from "../components";
export const PropertGallery = ({ image }) => {
  return (
    <Property.Gallery>
      <Property.ImageContainer>
        
        <Property.Image source={image[0]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[1]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[2]} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={image[3]} />
      </Property.ImageContainer>
    </Property.Gallery>
  );
};

export const PropertyFeatures = ({ features }) => {
  const [featuresShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
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
            {features.bedrooms}
          </Property.Text>
          <Property.Text>
            <Property.Span>Bathrooms : </Property.Span>
            {features.garage}
          </Property.Text>
        </Property.InfoItem>

        <Property.InfoItem>
        <Property.Text>
            <Property.Span>Land Area : </Property.Span>
             10 Acre
          </Property.Text>
          <Property.Text>
            <Property.Span>Status : </Property.Span>
            {features.status ? "Active" : "Not Active"}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAmenities = ({ amenities }) => {
  const [amenitiesShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
    </Property.Info>
  );
};

export const PropertyAddress = ({ address }) => {
  const [addressShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Address</Property.InfoTitle>
        <Property.Icon
          name={addressShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={addressShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Address : </Property.Span>
            St #39 , Tember Marker , Lahore
          </Property.Text>
          <Property.Text>
            <Property.Span>City : </Property.Span>
           Lahore
          </Property.Text>
          <Property.Text>
            <Property.Span>ZipCode : </Property.Span>
                 38000
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>ZipCode : </Property.Span>
                 38000
          </Property.Text>
          <Property.Text>
            <Property.Span>Longitude  : </Property.Span>
           36.3678
          </Property.Text>
          <Property.Text>
            <Property.Span>Latitude : </Property.Span>
           37.4568
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
         
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};
export const PropertyDescription = ({ description }) => {
  const [descriptionShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Property Description</Property.InfoTitle>
        <Property.Icon
          name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent block="true" contentShown={descriptionShown}>
        <Property.Text>{description}</Property.Text>
      </Property.InfoContent>
    </Property.Info>
  );
};

import React from "react";
import {
  HeaderContainer,
  FeaturedListingContainer,
  FeaturedAgentsContainer,
  HomeContactContainer,
  FooterContainer,
} from "../containers";
import UserHeaderContainer from "../containers/UserHeaderContainer";
const Home = () => {
  return (
    <>
      <UserHeaderContainer bg="false" source="/images/banners/banner4.jpg" />
      <FeaturedListingContainer />
    
      <HomeContactContainer />
      <FooterContainer />
    </>
  );
};

export default Home;

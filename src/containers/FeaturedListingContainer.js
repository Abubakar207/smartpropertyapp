import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { ListingItemContainer } from "./index";
import { getFeaturedList } from "../redux/actions/propertiesAction";
import { Listing , Form} from "../components";
import axios from "axios";
import AdvancedSearchContainer from "./AdvancedSearchContainer";
import Background from "../constants/hero.png";
import { Container ,Row, Col } from "react-bootstrap";
const FeaturedListingContainer = () => {
  const dispatch = useDispatch();

  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;

  const [PropertyData, setPropertyData] = useState([]);
  const getUser = useEffect(() => {
    axios
      .get("http://localhost:8000/api/property/")
      .then((res) => {
        setPropertyData(res.data);
        // setPropertyData(res.data.filter(data => data.City === "Lahore" ))
        // FilterByCityName()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const FilterByCityName = () => {
    const data = PropertyData;
    //setPropertyData(data.filter(data => Number(data.ZipCode) == 37998 ))
  };
  return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Listing</Section.Title>
        </Section.Header>
        <Section.Content>
          {PropertyData.map((data) => (
          
            <Listing>
              <Listing.Top>
              <Listing.Anchor to={`/property/${data.id}`}>
                <Listing.TopItem>
               
                  <img src={data.image1} width="100%" height="50%"></img>
                 
                  <Listing.TopItemContainer>
                    <Listing.TopItemInfo>
                      <Listing.Icon></Listing.Icon>
                      <Listing.Text location>{data.City}</Listing.Text>
                    </Listing.TopItemInfo>
                  </Listing.TopItemContainer>
                </Listing.TopItem>
                 </Listing.Anchor>
              </Listing.Top>
              <Listing.Bottom>
                <Listing.BottomItem>
                  <Listing.Title>
                    <Listing.Anchor to={`/property/${data.id}`}>
                      {data.PropertyTitle}
                    </Listing.Anchor>
                  </Listing.Title>
                  <Listing.Price>
                    
                    Rs
                    {data.Price}
                  </Listing.Price>
                  <Listing.Text description>
                    {data.Description.substring(0, 100)}
                  </Listing.Text>
                 
                </Listing.BottomItem>
              </Listing.Bottom>
            </Listing>
           
          ))}
        </Section.Content>
        <Section.Footer>
          <Section.Button>More Listing</Section.Button>
        </Section.Footer>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedListingContainer;

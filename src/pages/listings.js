import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import { FeaturedListingContainer } from "../containers";
import {
  ListingItemContainer,
  AdvancedSearchContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";
import { getPropertyList } from "../redux/actions/propertiesAction";

const Listing = () => {
  const dispatch = useDispatch();

  const listProperties = useSelector((state) => state.propertyList);

  const { properties } = listProperties;

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
  return (
    <>
    <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Flex>
            <Section.FlexItem width="22%" relative flexStart>
              <Section.Shadow>
                <AdvancedSearchContainer />
              </Section.Shadow>
            </Section.FlexItem>
            <Section.FlexItem width="73%">
              <Section.Content>
                <FeaturedListingContainer/>
              </Section.Content>
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;

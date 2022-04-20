import React from "react";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAllLisitngContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";
import UserHeaderContainer from "../containers/UserHeaderContainer";
const AdminListingList = () => {
  return (
    <>
        <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="All Listing">
            <AdminAllLisitngContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AdminListingList;

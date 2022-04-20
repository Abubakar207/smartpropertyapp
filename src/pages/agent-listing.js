import React from "react";
import { Section } from "../components";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAgentListing,
  FooterContainer,
} from "../containers";
import UserHeaderContainer from "../containers/UserHeaderContainer";
const AgentListing = () => {
  return (
    <>
      <UserHeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Listing">
            <AdminAgentListing />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AgentListing;

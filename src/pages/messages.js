import React from "react";
import { Section } from "../components";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import {
  DashboardContainer,
  MessagesContainer,
  FooterContainer,
} from "../containers";

const Messages = () => {
  return (
    <>
     <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Inbox Messages">
            <MessagesContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Messages;

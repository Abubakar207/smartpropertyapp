import React from "react";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import {
  ChangePasswordContainer,
  DashboardContainer,
} from "../containers";
import { Section } from "../components";

const Password = () => {
  
  return (
    <>
      <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Change Your Password">
            <ChangePasswordContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default Password;

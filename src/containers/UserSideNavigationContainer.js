import React from "react";
import { SideNavigation } from "../components";
import Userlinks from "../constants/routes/user-nav-links";

const UserSideNavigationContainer = ({
  sideNavShown,
  setSideNavShown,
  sideNavHidden,
  setSideNavHidden,
}) => {
  return (
    <SideNavigation shown={sideNavShown} hidden={sideNavHidden}>
      <SideNavigation.Container>
        <SideNavigation.Cross>
          <SideNavigation.Icon
            name="fas fa-times"
            onClick={() => {
              setSideNavHidden(true);
              setSideNavShown(false);
            }}
          />
        </SideNavigation.Cross>
        <SideNavigation.Header>
          <SideNavigation.Title>Smart Property</SideNavigation.Title>
          <SideNavigation.Text>The Home You Deserve</SideNavigation.Text>
        </SideNavigation.Header>

        <SideNavigation.Links>
          <SideNavigation.List>
            {Userlinks.map((link) => (
              <SideNavigation.ListItem key={link.to}>
                <SideNavigation.Anchor to={link.to}>
                  {link.name}
                </SideNavigation.Anchor>
              </SideNavigation.ListItem>
            ))}
            
          </SideNavigation.List>
        </SideNavigation.Links>
      </SideNavigation.Container>
    </SideNavigation>
  );
};

export default UserSideNavigationContainer;

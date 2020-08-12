import React from "react";
import {
  Li,
  AppLink,
  AppIcon,
  AppTitle,
  AppVersion,
  CardWrapper,
} from "./styles";

export const AppCard = ({ app }) => {
  return (
    <Li key={app.id}>
      <AppLink to={`/app/${app.id}`}>
        <CardWrapper>
          <AppIcon src={app.iconURL} alt={app.name} />
          <div>
            <AppTitle>{app.name}</AppTitle>
            <AppVersion>{app.version}</AppVersion>
          </div>
        </CardWrapper>
      </AppLink>
    </Li>
  );
};

import React from "react";
import {
  DetailsWrapper,
  DetailsIcon,
  DetailsInfo,
  DetailsTitle,
} from "./styles";
import { GitHubSVG } from "./github";

export const AppInfo = ({
  author,
  url,
  description,
  iconURL,
  version,
  name,
}) => (
  <>
    <DetailsTitle>{name}</DetailsTitle>
    <DetailsWrapper>
      <div>
        <DetailsIcon src={iconURL} />
      </div>
      <div>
        <DetailsInfo>v {version}</DetailsInfo>
        <DetailsInfo>{description}</DetailsInfo>
        <DetailsInfo>By {author}</DetailsInfo>
        <div>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            <GitHubSVG />
          </a>
        </div>
      </div>
    </DetailsWrapper>
  </>
);

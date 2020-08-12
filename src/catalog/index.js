import React, { useEffect } from "react";
import {
  useCatalogState,
  useCatalogDispatch,
  fetchAllApps,
} from "../state/catalog-context";
import { Title } from "./title";
import { AppCard } from "./app-card";
import { AppsListUl } from "./styles";

export default () => {
  const { apps } = useCatalogState();
  const dispatch = useCatalogDispatch();

  useEffect(() => {
    fetchAllApps(dispatch);
  }, [dispatch]);

  const appsArray = Object.keys(apps).map(function (key) {
    return apps[key];
  });

  return (
    <>
      <Title />
      <AppsListUl>
        {appsArray.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </AppsListUl>
    </>
  );
};

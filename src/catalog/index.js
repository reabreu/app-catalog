import React, { useEffect, useState } from "react";
import {
  useCatalogContext,
  fetchAllApps,
  STATUS,
} from "../state/catalog-context";
import { Title } from "./title";
import { Search } from "./search";
import { AppCard } from "./app-card";
import { AppsListUl } from "./styles";
import { RenderWithErrorHandling } from "../helpers/error-handling";

const filterBySearch = (col, searchTerm) =>
  col.filter(({ name }) => name.startsWith(searchTerm.toLowerCase()));

export default () => {
  const [state, dispatch] = useCatalogContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFetched, setHasFetched] = useState(false);
  const { apps } = state;

  useEffect(() => {
    fetchAllApps(dispatch);
    setHasFetched(true);
  }, [dispatch]);

  if (!hasFetched) return null;

  const appsArray = Object.keys(apps).map((key) => apps[key]);
  const filteredApps = filterBySearch(appsArray, searchTerm);

  return (
    <>
      <Title />
      <Search searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
      <RenderWithErrorHandling onErrorRetry={() => fetchAllApps(dispatch)}>
        <AppsListUl length={filteredApps.length}>
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </AppsListUl>
      </RenderWithErrorHandling>
    </>
  );
};

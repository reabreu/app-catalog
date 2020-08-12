import React, { useEffect, useState } from "react";
import {
  useCatalogState,
  useCatalogDispatch,
  fetchAllApps,
  STATUS,
} from "../state/catalog-context";
import { Title } from "./title";
import { Search } from "./search";
import { AppCard } from "./app-card";
import { AppsListUl, FetchingText, RetryButton } from "./styles";

export default () => {
  const { apps, status } = useCatalogState();
  const dispatch = useCatalogDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    fetchAllApps(dispatch);
    setHasFetched(true);
  }, [dispatch]);

  if (!hasFetched) return null;

  const appsArray = Object.keys(apps).map((key) => apps[key]);

  const filteredApps = appsArray.filter(({ name }) =>
    name.startsWith(searchTerm.toLowerCase())
  );

  const isFetching = STATUS.FETCHING === status;
  const isError = STATUS.ERROR === status;
  const isIdle = STATUS.IDLE === status;

  return (
    <>
      <Title />
      <Search searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
      {isIdle && (
        <AppsListUl length={filteredApps.length}>
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </AppsListUl>
      )}
      {isFetching && (
        <FetchingText>
          Hang in there a little bit, we're fetching the catalog for you...
        </FetchingText>
      )}
      {isError && (
        <RetryButton onClick={(e) => fetchAllApps(dispatch)}>
          Oops, something went wrong, click here to retry
        </RetryButton>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { useCatalogContext, fetchAllApps } from "../state/catalog-context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Title } from "./title";
import { Search } from "./search";
import { AppCard } from "./app-card";
import { AuthorSelect } from "./author-select";
import { AppsListUl, FilterPanel } from "./styles";
import { RenderWithErrorHandling } from "../helpers/error-handling";

const filterBySearch = (col, searchTerm) =>
  col.filter(({ name }) => name.startsWith(searchTerm.toLowerCase()));

const filterByAuthor = (col, selectedAuthor) =>
  col.filter(
    ({ author }) => selectedAuthor === "" || author === selectedAuthor
  );

export default () => {
  const [state, dispatch] = useCatalogContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFetched, setHasFetched] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const { apps } = state;

  useEffect(() => {
    fetchAllApps(dispatch);
    setHasFetched(true);
  }, [dispatch]);

  if (!hasFetched) return null;

  const appsArray = Object.keys(apps).map((key) => apps[key]);

  // Get all authors
  const authorsSet = new Set();

  appsArray.forEach((app) => authorsSet.add(app.author));

  const searchFilteredApps = filterBySearch(appsArray, searchTerm);
  const authorFilteredApps = filterByAuthor(searchFilteredApps, selectedAuthor);

  return (
    <>
      <Title />
      <FilterPanel>
        <Search searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
        <AuthorSelect
          options={Array.from(authorsSet)}
          onChangeHandler={(e) => setSelectedAuthor(e.target.value)}
        />
      </FilterPanel>
      <RenderWithErrorHandling onErrorRetry={() => fetchAllApps(dispatch)}>
        <AppsListUl>
          <TransitionGroup component={null} exit={false}>
            {authorFilteredApps.map((app, idx) => {
              return (
                <CSSTransition
                  key={app.id}
                  timeout={500}
                  classNames="item"
                  unmountOnExit
                >
                  <AppCard app={app} />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </AppsListUl>
      </RenderWithErrorHandling>
    </>
  );
};

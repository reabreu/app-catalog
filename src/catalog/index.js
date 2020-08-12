import React, { useEffect } from "react";
import {
  useCatalogState,
  useCatalogDispatch,
  fetchAllApps,
} from "../state/catalog-context";

export default () => {
  const { apps, status } = useCatalogState();
  const dispatch = useCatalogDispatch();

  useEffect(() => {
    fetchAllApps(dispatch);
  }, [dispatch]);

  const appsArray = Object.keys(apps).map(function (key) {
    return apps[key];
  });

  return (
    <ul>
      {status}
      {appsArray.map((app) => (
        <li>{app.name}</li>
      ))}
    </ul>
  );
};

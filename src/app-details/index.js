import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useCatalogContext,
  fetchAppById,
  STATUS,
} from "../state/catalog-context";
import { RenderWithErrorHandling } from "../helpers/error-handling";
import { AppInfo } from "./app-info";

export default () => {
  let { id } = useParams();

  const [state, dispatch] = useCatalogContext();
  const { apps, status } = state;
  const appData = apps[id];

  const isIdle = STATUS.IDLE === status;

  useEffect(() => {
    if (!appData) {
      fetchAppById(dispatch, id);
    }
  }, [dispatch, appData, id]);

  if (!appData && isIdle) return null;

  return (
    <RenderWithErrorHandling>
      <AppInfo {...appData} />
    </RenderWithErrorHandling>
  );
};

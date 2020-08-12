import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useCatalogContext,
  fetchAppById,
  STATUS,
} from "../state/catalog-context";
import { RenderWithErrorHandling } from "../helpers/error-handling";

export default () => {
  let { id } = useParams();
  const [state, dispatch] = useCatalogContext();
  const { apps, status } = state;

  const isIdle = STATUS.IDLE === status;

  useEffect(() => {
    if (!apps[id]) {
      fetchAppById(dispatch, id);
    }
  }, [dispatch]);

  if (!apps[id] && isIdle) return null;

  return (
    <RenderWithErrorHandling>
      <p>app</p>
    </RenderWithErrorHandling>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useCatalogContext, fetchAppById } from "../state/catalog-context";
import { RenderWithErrorHandling } from "../helpers/error-handling";
import { AppInfo } from "./app-info";
import { READMEWrapper } from "./styles";

const getREADME = async (url, callback) => {
  try {
    const req = await fetch(url);
    const text = await req.text();

    callback(text);
  } catch (error) {
    return "";
  }
};

export default () => {
  let { id } = useParams();

  const [readMe, setReadMe] = useState("");
  const [state, dispatch] = useCatalogContext();
  const { apps } = state;
  const appData = apps[id];

  useEffect(() => {
    if (!appData) {
      fetchAppById(dispatch, id);
    }

    if (appData?.readmeURL) {
      getREADME(appData.readmeURL, setReadMe);
    }
  }, [dispatch, appData, id]);

  if (!appData) return null;

  return (
    <RenderWithErrorHandling>
      <AppInfo {...appData} />
      {readMe && (
        <READMEWrapper>
          <ReactMarkdown source={readMe} />}
        </READMEWrapper>
      )}
    </RenderWithErrorHandling>
  );
};

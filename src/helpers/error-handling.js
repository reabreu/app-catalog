import React from "react";
import { useCatalogState, STATUS } from "../state/catalog-context";
import { FetchingText, RetryButton } from "./styles";

export const RenderWithErrorHandling = ({ children, onErrorRetry }) => {
  const { status } = useCatalogState();

  const isFetching = STATUS.FETCHING === status;
  const isError = STATUS.ERROR === status;
  const isIdle = STATUS.IDLE === status;

  return (
    <>
      {isIdle && children}
      {isFetching && (
        <FetchingText>
          Hang in there a little bit, we're fetching the app for you...
        </FetchingText>
      )}
      {isError && (
        <RetryButton onClick={onErrorRetry}>
          Oops, something went wrong, click here to retry
        </RetryButton>
      )}
    </>
  );
};

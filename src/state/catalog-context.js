import React, { useReducer } from "react";

const CatalogStateContext = React.createContext();
const CatalogDispatchContext = React.createContext();

export const ACTIONS = Object.freeze({
  ADD: "ADD",
  ADD_BY_ID: "ADD_BY_ID",
  SETSTATUS: "SETSTATUS",
});

export const STATUS = Object.freeze({
  IDLE: "IDLE",
  FETCHING: "FETCHING",
  ERROR: "ERROR",
});

// Reducer
function catalogReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const newApps = {};

      action.payload.forEach((element) => {
        newApps[element.id] = element;
      });

      return { ...state, apps: newApps };
    }
    case ACTIONS.SETSTATUS: {
      return { ...state, status: action.payload };
    }
    case ACTIONS.ADD_BY_ID: {
      return {
        ...state,
        apps: {
          ...state.apps,
          [action.payload.id]: action.payload.data,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Async actions
async function fetchAllApps(dispatch) {
  dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.FETCHING });

  try {
    const request = await fetch("/apps");
    const res = await request.json();

    dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.IDLE });
    dispatch({ type: ACTIONS.ADD, payload: res });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.ERROR });
  }
}

async function fetchAppById(dispatch, id) {
  dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.FETCHING });

  try {
    const request = await fetch(`/apps/${id}`);
    const res = await request.json();

    dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.IDLE });
    dispatch({
      type: ACTIONS.ADD_BY_ID,
      payload: {
        id,
        data: res,
      },
    });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: ACTIONS.SETSTATUS, payload: STATUS.ERROR });
  }
}

const initialState = {
  apps: {},
  status: STATUS.IDLE,
};

function CatalogProvider({ children }) {
  const [state, dispatch] = useReducer(catalogReducer, initialState);

  return (
    <CatalogStateContext.Provider value={state}>
      <CatalogDispatchContext.Provider value={dispatch}>
        {children}
      </CatalogDispatchContext.Provider>
    </CatalogStateContext.Provider>
  );
}

function useCatalogState() {
  const context = React.useContext(CatalogStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CatalogProvider");
  }
  return context;
}

function useCatalogDispatch() {
  const context = React.useContext(CatalogDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CatalogProvider");
  }
  return context;
}

function useCatalogContext() {
  return [useCatalogState(), useCatalogDispatch()];
}

export {
  CatalogProvider,
  useCatalogContext,
  useCatalogState,
  useCatalogDispatch,
  fetchAllApps,
  fetchAppById,
};

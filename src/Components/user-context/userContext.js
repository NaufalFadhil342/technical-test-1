import React, { createContext, useReducer } from 'react';

const initialUserState = {
  users: [],
};

export const UserContext = createContext({
  initialUserState,
  submitUser: () => {},
});

const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_USER': {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, {});

  const submitUser = (payload) => {
    dispatch({ type: 'SUBMIT_USER', state: [...state] });
  };

  return <UserContext.Provider value={submitUser}>{children}</UserContext.Provider>;
}

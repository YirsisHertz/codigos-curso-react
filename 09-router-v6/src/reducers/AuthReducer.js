import { authTypes } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case authTypes.login:
      return { log: true };

    case authTypes.logout:
      return { log: false };

    default:
      return state;
  }
};

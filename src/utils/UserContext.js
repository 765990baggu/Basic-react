import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: "DefaultUser",
});

export default UserContext;

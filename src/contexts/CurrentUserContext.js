import React from "react";
import avatar from "../images/Kusto.jpg";

export const CurrentUserContext = React.createContext({});

export const defaultCurrentUser = {
  name: "Иван Иванов",
  about: "водитель",
  avatar: avatar,
};

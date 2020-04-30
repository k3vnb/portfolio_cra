import React from "react";

const AppContext = React.createContext({
  appScrollTop: null,
  aboutOffsetTop: null,
  projectsOffsetTop: null,
  contactOffsetTop: null,
  setOffsetTop: () => {},
});

export default AppContext;

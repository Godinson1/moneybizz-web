import { useLocation, useRouteMatch } from "react-router-dom";

export type usePrepareLinkTypes = {
  to: string;
  isRelativePath: boolean;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ to, isRelativePath }: usePrepareLinkTypes) => {
  const location = useLocation();
  const match = useRouteMatch();

  let pathname;

  if (match && isRelativePath) {
    pathname = match.url + to;
  } else {
    pathname = to || location.pathname;
  }

  return {
    pathname: pathname.replace(/\/\//g, "/"),
  };
};

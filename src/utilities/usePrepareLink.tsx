import { useLocation, useRouteMatch } from "react-router-dom";

export type usePrepareLinkTypes = {
  to: string;
  isRelativePath: boolean;
  query: any;
  pushToQuery: any;
  hash: any;
  keepOldQuery: boolean;
  state: any;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  to,
  isRelativePath,
  query,
  pushToQuery,
  hash,
  keepOldQuery,
  state,
}: usePrepareLinkTypes) => {
  const location = useLocation();
  const match = useRouteMatch();

  let pathname;

  if (match && isRelativePath) {
    pathname = match.url + to;
  } else {
    pathname = to || location.pathname;
  }

  const newQuery = keepOldQuery
    ? new URLSearchParams(location.search)
    : new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    return newQuery.set(key, value as string);
  });

  Object.entries(pushToQuery).forEach(([key, value]) => {
    const currentValue = newQuery.get(key);
    const splittedValue = currentValue ? currentValue.split(",") : [];
    splittedValue.push(value as string);

    newQuery.set(key, splittedValue as any);
  });

  return {
    pathname: pathname.replace(/\/\//g, "/"),
    search: newQuery.toString() ? `?${newQuery.toString()}` : "",
    hash,
    state,
  };
};

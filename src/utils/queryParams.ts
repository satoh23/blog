export function getQueryParamOrUndefined(url: string, query: string) {
  const queryIndex = url.indexOf(query);
  if (queryIndex == -1) return undefined;

  return url.substring(queryIndex).replace(query, "");
}

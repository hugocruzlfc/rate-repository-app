export const repositoriesFilterParser = (filter) => {
  switch (filter) {
    case "LATEST":
      return { orderBy: "CREATED_AT", orderDirection: "DESC" };
    case "HIGHEST_RATED":
      return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
    case "LOWEST_RATED":
      return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
  }
};

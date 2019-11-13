import history from "../routes/History";

export const pushToUrlNewParam = page => {
  history.push({
    search: `?page=${page}`
  });
};

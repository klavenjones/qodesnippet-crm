import axios from "axios";

export const fetcher = (url, data = undefined) =>
  axios({
    url: url,
    method: data ? "POST" : "GET",
    data: data
  }).then((response) => response.data);



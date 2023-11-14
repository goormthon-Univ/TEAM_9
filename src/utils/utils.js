import axios from "axios";

export function wrapPromise(promise) {
  let state = "pending";
  let result = null;
  promise
    .then((res) => {
      state = "complete";
      result = res;
    })
    .catch((err) => {
      state = "error";
      result = err;
    });
  return () => {
    switch (state) {
      case "complete":
        return result;
      case "error":
        throw result;
      default:
        throw promise;
    }
  };
}

export function fetchAxios(url, config = {}) {
  return wrapPromise(axios(url, config).then((e) => e.data));
}

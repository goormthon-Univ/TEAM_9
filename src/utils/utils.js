import axios from "axios";

const fetcherMap = new Map();

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
  const key = JSON.stringify({ url, config });
  if (fetcherMap.has(key)) {
    const { promise, date } = fetcherMap.get(key);
    if (Date.now() - date < 5000) return promise;
  }
  const value = {
    promise: wrapPromise(axios(url, config).then((e) => e.data)),
    date: Date.now(),
  };
  fetcherMap.set(key, value);

  return value.promise;
}

export const fetchData = (url) => fetch(url).then((data) => data.json());
export const setToLacalStorage = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));
export const getDataFromLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name));

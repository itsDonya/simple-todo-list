// set data on localStorage
export const setOnLocalStorage = (data) => {
  localStorage.setItem("Gischa_Tasks", JSON.stringify(data));
};

// get data from localStorage
export const getFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("Gischa_Tasks"));
  return tasks ? tasks : [];
};

// clear anything stored in localStorage
export const clearLocalStorage = () => {
  localStorage.removeItem("Gischa_Tasks");
};

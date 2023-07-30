export const setOnLocalStorage = (data) => {
  localStorage.setItem("Gischa_Tasks", JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("Gischa_Tasks"));
  return tasks;
};

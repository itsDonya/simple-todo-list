import { createHash } from "../composables/hash-generator";
import {
  setOnLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
} from "../composables/localstorage";

export default {
  toggleNewTask({ commit }) {
    // open/close task blank wrapper
    commit("toggleNewTask");
  },
  updateNewTaskTitle({ commit }, value) {
    // update new task title in store on any change happens task blank wrapper
    commit("updateNewTaskTitle", value);
  },
  newTask({ state, commit }) {
    const newTaskData = {
      id: createHash(), // 6-digits hashId
      title: state.newTaskTitle,
      status: "uncompleted", // each task is uncompleted on first submit
    };

    commit("newTask", newTaskData);

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  removeTask({ state, commit }, id) {
    commit("removeTask", id);

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  archiveTask({ state, commit }, id) {
    commit("archiveTask", id);

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  restoreTask({ commit }, id) {
    commit("restoreTask", id);

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  getFromLocalStorage({ commit }) {
    // get data from localStorage on first load
    const tasks = getFromLocalStorage();

    // set gotten tasks on state
    commit("setTasks", tasks);
  },
  removeAllTasks({ state, commit }) {
    commit("removeAllTasks");

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  toggleStatus({ state, commit }, id) {
    commit("toggleStatus", id);

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  checkAllTasks({ commit }) {
    commit("checkAllTasks");

    // set updated tasks in localStorage
    setOnLocalStorage(state.tasks);
  },
  clearData({ commit }) {
    commit("clearData");

    // clear anything stored in localStorage
    clearLocalStorage();
  },
  toggleSidebar({ commit }, value) {
    commit("toggleSidebar", value);
  },
};

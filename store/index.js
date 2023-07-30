import Vue from "vue";
import { createHash } from "../composables/hash-generator";

export const state = () => ({
  newTaskOpen: false,
  newTaskTitle: "",
  tasks: [],
});

export const mutations = {
  toggleNewTask(state) {
    state.newTaskOpen = !state.newTaskOpen;
  },
  updateNewTaskTitle(state, value) {
    state.newTaskTitle = value;
  },
  newTask(state, data) {
    state.tasks.unshift(data);
  },
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  removeTask(state, id) {
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);
    if (identifiedTaskIndex > -1) {
      state.tasks.splice(identifiedTaskIndex, 1);
    }
  },
  removeAllTasks(state) {
    state.tasks.splice(0);
  },
  toggleStatus(state, id) {
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);
    const newStatus =
      state.tasks[identifiedTaskIndex].status === "completed"
        ? "uncompleted"
        : "completed";
    Vue.set(state.tasks[identifiedTaskIndex], "status", newStatus);
  },
  checkAllTasks(state) {
    for (let i in state.tasks) {
      Vue.set(state.tasks[i], "status", "completed");
    }
  },
};

export const actions = {
  toggleNewTask({ commit }) {
    commit("toggleNewTask");
  },
  updateNewTaskTitle({ commit }, value) {
    commit("updateNewTaskTitle", value);
  },
  newTask({ state, commit }) {
    const newTaskData = {
      id: createHash(),
      title: state.newTaskTitle,
      status: "uncompleted",
    };

    commit("newTask", newTaskData);

    // set new task on localStorage
    const tasks = state.tasks;
    localStorage.setItem("Gischa_Tasks", JSON.stringify(tasks));
  },
  removeTask({ state, commit }, id) {
    commit("removeTask", id);

    // set changes on localStorage
    const tasks = state.tasks;
    localStorage.setItem("Gischa_Tasks", JSON.stringify(tasks));
  },
  getFromLocalStorage({ commit }) {
    // get tasks from localStorage (firstLoad)
    const tasks = JSON.parse(localStorage.getItem("Gischa_Tasks"));
    commit("setTasks", tasks);
  },
  removeAllTasks({ commit }) {
    commit("removeAllTasks");
    localStorage.setItem("Gischa_Tasks", JSON.stringify([]));
  },
  toggleStatus({ state, commit }, id) {
    commit("toggleStatus", id);
    const tasks = state.tasks;
    localStorage.setItem("Gischa_Tasks", JSON.stringify(tasks));
  },
  checkAllTasks({ commit }) {
    commit("checkAllTasks");
  },
};

export const getters = {
  allTasks: (state) => (status) => {
    return status == ""
      ? state.tasks
      : state.tasks.filter((task) => task.status === status);
  },
};

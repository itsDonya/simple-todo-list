import Vue from "vue";
import { createHash } from "../composables/hash-generator";
import {
  setOnLocalStorage,
  getFromLocalStorage,
} from "../composables/localstorage";

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
  archiveTask(state, id) {
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);
    Vue.set(state.tasks[identifiedTaskIndex], "status", "archive");
  },
  restoreTask(state, id) {
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);
    Vue.set(state.tasks[identifiedTaskIndex], "status", "uncompleted");
  },
  removeAllTasks(state) {
    const archivedTasks = state.tasks.filter(
      (task) => task.status === "archive"
    );
    state.tasks.splice(0);
    Vue.set(state, "tasks", archivedTasks);
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
      if (state.tasks[i].status !== "archive") {
        Vue.set(state.tasks[i], "status", "completed");
      }
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
    setOnLocalStorage(state.tasks);
  },
  removeTask({ state, commit }, id) {
    commit("removeTask", id);

    // set changes on localStorage
    setOnLocalStorage(state.tasks);
  },
  archiveTask({ state, commit }, id) {
    commit("archiveTask", id);

    // set changes on localStorage
    setOnLocalStorage(state.tasks);
  },
  restoreTask({ commit }, id) {
    commit("restoreTask", id);

    // set changes on localStorage
    setOnLocalStorage(state.tasks);
  },
  getFromLocalStorage({ commit }) {
    // get tasks from localStorage (firstLoad)
    const tasks = getFromLocalStorage();
    commit("setTasks", tasks);
  },
  removeAllTasks({ state, commit }) {
    commit("removeAllTasks");
    setOnLocalStorage(state.tasks);
  },
  toggleStatus({ state, commit }, id) {
    commit("toggleStatus", id);
    setOnLocalStorage(state.tasks);
  },
  checkAllTasks({ commit }) {
    commit("checkAllTasks");
    setOnLocalStorage(state.tasks);
  },
};

export const getters = {
  allTasks: (state) => (status) => {
    return status == ""
      ? state.tasks.filter((task) => task.status !== "archive")
      : state.tasks.filter((task) => task.status === status);
  },
};

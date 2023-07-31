import Vue from "vue";
import { createHash } from "../composables/hash-generator";
import {
  setOnLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
} from "../composables/localstorage";

export const state = () => ({
  newTaskOpen: false,
  newTaskTitle: "",
  tasks: [],
});

export const mutations = {
  toggleNewTask(state) {
    // expand/close new task wrapper
    state.newTaskOpen = !state.newTaskOpen;
  },
  updateNewTaskTitle(state, value) {
    // update new task title
    state.newTaskTitle = value;
  },
  newTask(state, data) {
    // append new task to the start of the tasks array
    state.tasks.unshift(data);
  },
  setTasks(state, tasks) {
    // set gotten task on state
    state.tasks = tasks;
  },
  removeTask(state, id) {
    // identify task by id
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);

    // remove a specific task
    if (identifiedTaskIndex > -1) {
      state.tasks.splice(identifiedTaskIndex, 1);
    }
  },
  archiveTask(state, id) {
    // identify task by id
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);

    // mark task as archive
    Vue.set(state.tasks[identifiedTaskIndex], "status", "archive");
  },
  restoreTask(state, id) {
    // identify task by id
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);

    // on restoring an archived task, it should be marked as uncompleted to be useful again
    Vue.set(state.tasks[identifiedTaskIndex], "status", "uncompleted");
  },
  removeAllTasks(state) {
    // it will remove all tasks with any status but "archived"
    const archivedTasks = state.tasks.filter(
      (task) => task.status === "archive"
    );
    state.tasks.splice(0);
    Vue.set(state, "tasks", archivedTasks);
  },
  toggleStatus(state, id) {
    // identify task by id
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);

    // mark tasks as completed/uncompleted
    const newStatus =
      state.tasks[identifiedTaskIndex].status === "completed"
        ? "uncompleted"
        : "completed";
    Vue.set(state.tasks[identifiedTaskIndex], "status", newStatus);
  },
  checkAllTasks(state) {
    // check all tasks with any status but archived
    for (let i in state.tasks) {
      if (state.tasks[i].status !== "archive") {
        Vue.set(state.tasks[i], "status", "completed");
      }
    }
  },
  clearData(state) {
    // clear all tasks stored in state
    state.tasks.splice(0);
  },
};

export const actions = {
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
};

export const getters = {
  allTasks: (state) => (status) => {
    return status == ""
      ? // returns tasks all tasks but archived (because user shouldn't see archived tasks but in "?status=archive" query)
        state.tasks.filter((task) => task.status !== "archive")
      : // returns tasks with a specific status (completed/uncompleted/archive)
        state.tasks.filter((task) => task.status === status);
  },
};

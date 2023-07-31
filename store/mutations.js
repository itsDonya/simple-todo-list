import Vue from "vue";

export default {
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
  toggleSidebar(state, value) {
    // value should be a Boolean
    if (value) {
      // set sidebar visibility as we determine
      state.sidebarOpen = value;
      Vue.set(state, "sidebarOpen", value);
    } else {
      // just toggle sidebar's current visibility
      Vue.set(state, "sidebarOpen", !state.sidebarOpen);
    }
  },
};

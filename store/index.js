export const state = () => ({
  newTaskOpen: false,
  newTaskTitle: "",
  counter: 0,
  tasks: [
    {
      id: 3,
      title: "Task 3",
      status: "uncompleted",
    },
    {
      id: 2,
      title: "Task 2",
      status: "uncompleted",
    },
    {
      id: 1,
      title: "Task 1",
      status: "uncompleted",
    },
  ],
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
    state.counter++;
  },
  removeTask(state, id) {
    const identifiedTaskIndex = state.tasks.findIndex((task) => task.id === id);
    if (identifiedTaskIndex > -1) {
      state.tasks.splice(identifiedTaskIndex, 1);
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
      id: state.counter,
      title: state.newTaskTitle,
      status: "uncompleted",
    };

    commit("newTask", newTaskData);
  },
  removeTask({ commit }, id) {
    commit("removeTask", id);
  },
};

export const getters = {
  allTasks(state) {
    return state.tasks;
  },
};

export const state = () => ({
  newTaskOpen: false,
  newTaskTitle: "",
  counter: 0,
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
    state.counter++;
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
};

export const getters = {
  allTasks(state) {
    return state.tasks;
  },
};

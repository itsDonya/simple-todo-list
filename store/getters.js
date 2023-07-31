export default {
  allTasks: (state) => (status) => {
    return status == ""
      ? // returns tasks all tasks but archived (because user shouldn't see archived tasks but in "?status=archive" query)
        state.tasks.filter((task) => task.status !== "archive")
      : // returns tasks with a specific status (completed/uncompleted/archive)
        state.tasks.filter((task) => task.status === status);
  },
  sidebarOpen(state) {
    return state.sidebarOpen;
  },
};

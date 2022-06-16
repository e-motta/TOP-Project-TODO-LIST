import projectsJson from './projects.json';

const manageLocalStorage = (() => {
  const load = () => {
    if (localStorage.getItem('projects') === null) {
      return projectsJson;
    }

    const projectsJsonString = localStorage.getItem('projects');
    return JSON.parse(projectsJsonString);
  };

  const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { load, saveProjects };
})();

const module = (() => {
  const projects = manageLocalStorage.load();

  const updatePending = (project) => {
    const updatedPending = project.tasks.reduce((total, task) => {
      const done = !task.done ? 1 : 0;
      return total + done;
    }, 0);

    project.pending = updatedPending;
  };

  const updateCompleted = (project) => {
    const updatedCompleted = project.tasks.reduce((total, task) => {
      const done = task.done ? 1 : 0;
      return total + done;
    }, 0);

    project.completed = updatedCompleted;
  };

  const updateTasksStats = (project) => {
    updatePending(project);
    updateCompleted(project);
  };

  const toggleDoneTask = (project, task, done) => {
    if (done) {
      task.done = true;
    } else {
      task.done = false;
    }

    updateTasksStats(project);
    manageLocalStorage.saveProjects(projects);
  };

  const addNewProject = (name, description) => {
    const p = {
      id: projects.length >= 1 ? projects[projects.length - 1].id + 1 : 0,
      name,
      pending: 0,
      completed: 0,
      description,
      tasks: [],
    };
    projects.push(p);

    manageLocalStorage.saveProjects(projects);

    return p.id;
  };

  const editProject = (projectId, newName, newDescription) => {
    const project = projects.find((p) => p.id.toString() === projectId);
    project.name = newName;
    project.description = newDescription;
    manageLocalStorage.saveProjects(projects);
  };

  const deleteProject = (projectId) => {
    // filter in place
    projects.splice(0, projects.length, ...projects.filter((p) => p.id.toString() !== projectId));
    manageLocalStorage.saveProjects(projects);
  };

  const addNewTask = (projectId, name, dueDate, description, priority) => {
    const p = projects.find((p) => p.id.toString() === projectId);

    const t = {
      id: p.tasks.length >= 1 ? p.tasks[p.tasks.length - 1].id + 1 : 0,
      name,
      dueDate,
      description,
      priority,
      done: false,
    };

    p.tasks.push(t);
    updateTasksStats(p);
    manageLocalStorage.saveProjects(projects);
  };

  const editTask = (projectId, taskId, newName, newDueDate, newDescription, newPriority) => {
    const p = projects.find((p) => p.id.toString() === projectId);
    const t = p.tasks.find((t) => t.id.toString() === taskId);

    t.name = newName;
    t.dueDate = newDueDate;
    t.description = newDescription;
    t.priority = newPriority;

    manageLocalStorage.saveProjects(projects);
  };

  const deleteTask = (projectId, taskId) => {
    const p = projects.find((p) => p.id.toString() === projectId);
    p.tasks = p.tasks.filter((t) => t.id.toString() !== taskId);
    updateTasksStats(p);
    manageLocalStorage.saveProjects(projects);
  };

  return {
    projects,
    toggleDoneTask,
    addNewProject,
    editProject,
    deleteProject,
    addNewTask,
    editTask,
    deleteTask,
  };
})();

export default module;

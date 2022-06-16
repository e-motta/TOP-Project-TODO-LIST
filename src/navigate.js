import Header from './components/header';
import Sidebar from './components/sidebar';
import AllProjects from './components/all-projects';
import Project from './components/project';
import NewProject from './components/new-project';
import EditProject from './components/edit-project';
import NewTask from './components/new-task';
import EditTask from './components/edit-task';

import reactSidebar from './reactive/sidebar';
import reactAllProjects from './reactive/all-projects';
import reactProject from './reactive/project';
import reactNewProject from './reactive/new-project';
import reactEditProject from './reactive/edit-project';
import reactNewTask from './reactive/new-task';
import reactEditTask from './reactive/edit-task';

import projectsModule from './projects';

const { projects } = projectsModule;

const navigate = (() => {
  const home = () => {
    const main = document.querySelector('.main');
    main.replaceChildren(AllProjects(projects));

    reactAllProjects(projects);
  };

  const project = (e) => {
    const project = projects.find((p) => p.id.toString() === e.target.getAttribute('project-id'));

    const main = document.querySelector('.main');
    main.replaceChildren(Project(project));
    reactProject(project);
  };

  const newProject = (e) => {
    const main = document.querySelector('.main');
    main.replaceChildren(NewProject());

    reactNewProject();
  };

  const editProject = (e) => {
    const project = projects.find((p) => p.id.toString() === e.target.getAttribute('project-id'));
    const main = document.querySelector('.main');
    main.replaceChildren(EditProject(project));

    reactEditProject(project);
  };

  const newTask = (e) => {
    const project = projects.find((p) => p.id.toString() === e.target.getAttribute('project-id'));

    const main = document.querySelector('.main');
    main.replaceChildren(NewTask(project));

    reactNewTask(project);
  };

  const editTask = (e) => {
    const project = projects.find((p) => p.id.toString() === e.target.getAttribute('project-id'));
    const task = project.tasks.find((t) => t.id.toString() === e.target.getAttribute('task-id'));

    const main = document.querySelector('.main');
    main.replaceChildren(EditTask(project, task));

    reactEditTask(task);
  };

  const initialLoad = () => {
    const content = document.querySelector('.content');

    content.appendChild(Header);
    content.appendChild(Sidebar(projects));

    reactSidebar();

    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    home();
  };

  const reloadSidebar = () => {
    const content = document.querySelector('.content');
    const newSidebar = Sidebar(projects);
    const oldSidebar = document.querySelector('.sidebar');

    content.replaceChild(newSidebar, oldSidebar);

    reactSidebar();
  };

  return {
    initialLoad,
    reloadSidebar,
    home,
    project,
    newProject,
    editProject,
    newTask,
    editTask,
  };
})();

export default navigate;

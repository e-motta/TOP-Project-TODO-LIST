import navigate from '../navigate';
import projectsModule from '../projects';

const addNavigation = () => {
  const openProjectBtns = document.querySelectorAll('.project-btn');
  openProjectBtns.forEach((btn) => btn.addEventListener('click', navigate.project));
};

const displayContent = () => {
  const tasksStats = [];
  projectsModule.projects.forEach((p) => {
    tasksStats.push(p.pending);
    tasksStats.push(p.completed);
  });
  const tasksStatsElements = document.querySelectorAll('.tasks-num');
  tasksStatsElements.forEach((el, i) => {
    el.textContent = tasksStats[i];
  });
};

const react = () => {
  addNavigation();
  displayContent();
};

export default react;

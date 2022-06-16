import Project from './project-item';

const component = ((projects) => {
  const allProjects = document.createElement('div');
  allProjects.classList.add('main-content');

  const sectionTitle = document.createElement('div');
  sectionTitle.classList.add('section-title');
  sectionTitle.appendChild(document.createTextNode('Your projects'));

  allProjects.appendChild(sectionTitle);

  projects.forEach((project) => allProjects.appendChild(Project(project)));

  return allProjects;
});

export default component;

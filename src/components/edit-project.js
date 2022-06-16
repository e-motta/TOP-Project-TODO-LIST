import ProjectForm from './project-form';

const component = ((project) => {
  const projectEditContent = document.createElement('div');
  projectEditContent.classList.add('main-content');
  projectEditContent.classList.add('project-edit-content');

  const mainHeader = document.createElement('div');
  mainHeader.classList.add('main-header');

  const backButton = document.createElement('button');
  backButton.classList.add('btn');
  backButton.setAttribute('project-id', project.id);
  backButton.setAttribute('type', 'button');

  const span = document.createElement('span');
  span.classList.add('iconify');
  span.setAttribute('data-icon', 'mdi-arrow-left');

  backButton.appendChild(span);

  backButton.appendChild(document.createTextNode(` ${project.name}`));

  mainHeader.appendChild(backButton);

  projectEditContent.appendChild(mainHeader);

  const title = 'Edit project details';
  const saveBtnName = 'Save changes';

  projectEditContent.appendChild(ProjectForm(title, saveBtnName, project));

  return projectEditContent;
});

export default component;

const component = ((project, task, i) => {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const priorityBar = document.createElement('div');
  priorityBar.classList.add('priority-bar');
  priorityBar.classList.add(task.priority);

  taskContainer.appendChild(priorityBar);

  const taskTitle = document.createElement('div');
  taskTitle.setAttribute('id', `task-title-${i}`);
  taskTitle.classList.add('task-title');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'check');
  checkbox.setAttribute('id', `check-${i}`);

  taskTitle.appendChild(checkbox);

  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const dueDate = document.createElement('div');
  dueDate.setAttribute('id', `due-date-${i}`);
  dueDate.classList.add('due-date');
  const date = `${months[task.dueDate.slice(5, 7)]} ${task.dueDate.slice(8, 10)}, ${task.dueDate.slice(0, 4)}`;
  dueDate.appendChild(document.createTextNode(date));

  taskTitle.appendChild(dueDate);

  const taskName = document.createElement('div');
  taskName.setAttribute('id', `task-name-${i}`);
  taskName.classList.add('task-name');
  taskName.appendChild(document.createTextNode(task.name));

  taskTitle.appendChild(taskName);

  const btnNamesMap = {
    edit: 'Edit task',
    trash: 'Delete task',
    'chevron-down': 'Expand task',
  };

  Object.entries(btnNamesMap).forEach((btnName) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    if (btnName[0] === 'chevron-down' || btnName[0] === 'edit') {
      btn.classList.add(`${btnName[0]}-task-btn`);
    }
    btn.setAttribute('id', `${btnName[0]}-task-btn-${i}`);
    btn.setAttribute('project-id', project.id);
    btn.setAttribute('task-id', i);
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', btnName[1]);

    const span = document.createElement('span');
    span.classList.add('iconify');
    span.setAttribute('data-icon', `mdi-${btnName[0]}`);

    btn.appendChild(span);
    taskTitle.append(btn);
  });

  taskContainer.appendChild(taskTitle);

  const taskExpand = document.createElement('div');
  taskExpand.classList.add('task-expand');
  taskExpand.setAttribute('id', `task-expand-${i}`);
  taskExpand.classList.add('hide');

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  if (task.description) {
    taskDescription.appendChild(document.createTextNode(task.description));
  } else {
    taskDescription.appendChild(document.createTextNode(
      '[Edit to add a description...]',
    ));
  }

  taskExpand.appendChild(taskDescription);

  taskContainer.appendChild(taskExpand);

  return taskContainer;
});

export default component;

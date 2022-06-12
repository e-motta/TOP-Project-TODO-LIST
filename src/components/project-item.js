const component = ((project) => {
    const projectContainer = document.createElement(`div`)
    projectContainer.classList.add(`project-container`)

    const projectInfo = document.createElement(`div`)
    projectInfo.classList.add(`project-info`)

    const title = document.createElement(`div`)
    title.classList.add(`title`)
    title.appendChild(document.createTextNode(project.name))  // **

    projectInfo.appendChild(title)

    const description = document.createElement(`div`)
    description.classList.add(`description`)
    description.setAttribute(`title`, project.description)  // **
    description.appendChild(document.createTextNode(project.description))  // **

    projectInfo.appendChild(description)

    projectContainer.appendChild(projectInfo)

    const projectTasks = document.createElement(`div`)
    projectTasks.classList.add(`project-tasks`)

    const pendingTasks = document.createElement(`div`)
    pendingTasks.classList.add(`tasks`)
    pendingTasks.appendChild(document.createTextNode(`Pending`))

    projectTasks.appendChild(pendingTasks)

    const pendingTasksNum = document.createElement(`div`)
    pendingTasksNum.classList.add(`tasks-num`)
    pendingTasksNum.appendChild(document.createTextNode(project.pending))  // *

    projectTasks.appendChild(pendingTasksNum)

    const completedTasks = document.createElement(`div`)
    completedTasks.classList.add(`tasks`)
    completedTasks.appendChild(document.createTextNode(`Completed`))

    projectTasks.appendChild(completedTasks)

    const completedTasksNum = document.createElement(`div`)
    completedTasksNum.classList.add(`tasks-num`)
    completedTasksNum.appendChild(document.createTextNode(project.completed))  // *

    projectTasks.appendChild(completedTasksNum)

    projectContainer.appendChild(projectTasks)

    const openProjectBtn = document.createElement(`button`)
    openProjectBtn.classList.add(`btn`)
    openProjectBtn.classList.add(`project-btn`)
    openProjectBtn.id = project.id
    openProjectBtn.setAttribute(`type`, `button`)
    openProjectBtn.appendChild(document.createTextNode(`OPEN`))

    projectContainer.appendChild(openProjectBtn)

    return projectContainer
});

export default component;
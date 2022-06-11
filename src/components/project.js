import Task from './task-item.js'

const component = ((project) => {
    // Project content
    const projectContent = document.createElement(`div`)
    projectContent.classList.add(`main-content`)
    projectContent.classList.add(`project-content`)

    // Header
    const mainHeader = document.createElement(`div`)
    mainHeader.classList.add(`main-header`)

    const backBtn = document.createElement(`button`)
    backBtn.classList.add(`btn`)
    backBtn.setAttribute(`id`, `back-all-projects`)
    backBtn.setAttribute(`type`, `button`)

    const spanArrowLeft = document.createElement(`span`)
    spanArrowLeft.classList.add(`iconify`)
    spanArrowLeft.setAttribute(`data-icon`, `mdi-arrow-left`)

    backBtn.appendChild(spanArrowLeft)

    backBtn.appendChild(document.createTextNode(` All Projects`))

    mainHeader.appendChild(backBtn)

    const projectTitle = document.createElement(`div`)
    projectTitle.classList.add(`project-title`)

    const sectionTitle = document.createElement(`div`)
    sectionTitle.classList.add(`section-title`)
    sectionTitle.appendChild(document.createTextNode(project.name))  // *

    projectTitle.appendChild(sectionTitle)

    const editBtn = document.createElement(`button`)
    editBtn.classList.add(`btn`)
    editBtn.classList.add(`edit-btn`)
    editBtn.setAttribute(`id`, `edit-project-btn`)
    editBtn.setAttribute(`type`, `button`)

    const spanEdit = document.createElement(`span`)
    spanEdit.classList.add(`iconify`)
    spanEdit.setAttribute(`data-icon`, `mdi-edit`)
    spanEdit.setAttribute(`title`, `Edit project`)

    editBtn.appendChild(spanEdit)

    projectTitle.appendChild(editBtn)

    mainHeader.appendChild(projectTitle)

    projectContent.appendChild(mainHeader)

    // Task component
    for (let i = 0; i < project.tasks.length; i++) {
        const props = [project.tasks[i], i]
        const task = Task(...props)

        projectContent.appendChild(task)  // **
        
        // NOTE: CALL ALL HTML CREATION (PROJECT, TASK...), THEN REACTIVE,
        // IN A SINGLE COMPONENT
        // THEN IMPORT IT INTO INDEX.JS
    }

    // Add task button
    const addTaskBtn = document.createElement(`button`)
    addTaskBtn.classList.add(`btn`)
    addTaskBtn.classList.add(`add-task-btn`)
    addTaskBtn.setAttribute(`id`, `add-task-btn`)
    addTaskBtn.setAttribute(`type`, `button`)

    const spanAdd = document.createElement(`span`)
    spanAdd.classList.add(`iconify`)
    spanAdd.setAttribute(`data-icon`, `mdi-plus`)

    addTaskBtn.appendChild(spanAdd)

    const spanAddText = document.createElement(`span`)
    spanAddText.classList.add(`add-item-text`)
    spanAddText.appendChild(document.createTextNode(`ADD TASK`))

    addTaskBtn.appendChild(spanAddText)

    projectContent.appendChild(addTaskBtn)

    return projectContent
});

export default component

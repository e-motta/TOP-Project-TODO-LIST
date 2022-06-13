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

    const btnsContainer = document.createElement(`div`)
    btnsContainer.classList.add(`project-btns-container`)

    const editBtn = document.createElement(`button`)
    editBtn.classList.add(`btn`)
    editBtn.classList.add(`edit-btn`)
    editBtn.classList.add(`edit-project-btn`)
    editBtn.setAttribute(`project-id`, project.id)
    editBtn.setAttribute(`type`, `button`)
    editBtn.title = `Edit project`

    const spanEdit = document.createElement(`span`)
    spanEdit.classList.add(`iconify`)
    spanEdit.setAttribute(`data-icon`, `mdi-edit`)
    spanEdit.setAttribute(`title`, `Edit project`)

    editBtn.appendChild(spanEdit)

    btnsContainer.appendChild(editBtn)

    const deleteBtn = document.createElement(`button`)
    deleteBtn.classList.add(`btn`)
    deleteBtn.classList.add(`delete-btn`)
    deleteBtn.classList.add(`delete-project-btn`)
    deleteBtn.setAttribute(`project-id`, project.id)
    deleteBtn.setAttribute(`type`, `button`)
    deleteBtn.title = `Delete project`

    const spanDelete = document.createElement(`span`)
    spanDelete.classList.add(`iconify`)
    spanDelete.setAttribute(`data-icon`, `mdi-trash`)
    spanDelete.setAttribute(`title`, `Edit project`)

    deleteBtn.appendChild(spanDelete)

    btnsContainer.appendChild(deleteBtn)

    projectTitle.appendChild(btnsContainer)

    mainHeader.appendChild(projectTitle)

    projectContent.appendChild(mainHeader)

    // Task component
    for (let i = 0; i < project.tasks.length; i++) {
        const props = [project, project.tasks[i], i]
        const task = Task(...props)

        projectContent.appendChild(task)  // **
    }

    // Add task button
    const addTaskBtn = document.createElement(`button`)
    addTaskBtn.classList.add(`btn`)
    addTaskBtn.classList.add(`add-task-btn`)
    addTaskBtn.setAttribute(`project-id`, project.id)
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

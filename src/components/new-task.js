import TaskForm from './task-form.js'

const component = ((projectName) => {
    const taskAddContent = document.createElement(`div`)
    taskAddContent.classList.add(`main-content`)
    taskAddContent.classList.add(`task-edit-content`)

    const mainHeader = document.createElement(`div`)
    mainHeader.classList.add(`main-header`)

    const backBtn = document.createElement(`button`)
    backBtn.classList.add(`btn`)
    backBtn.setAttribute(`type`, `button`)
    
    const span = document.createElement(`span`)
    span.classList.add(`iconify`)
    span.setAttribute(`data-icon`, `mdi-arrow-left`)

    backBtn.appendChild(span)

    backBtn.appendChild(document.createTextNode(projectName))

    mainHeader.appendChild(backBtn)

    taskAddContent.appendChild(mainHeader)

    const legendName = `New task details`
    const saveBtnName = `Add task`

    taskAddContent.appendChild(TaskForm(legendName, saveBtnName))

    return taskAddContent
});

export default component
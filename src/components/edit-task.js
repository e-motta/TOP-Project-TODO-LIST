import TaskForm from './task-form'

const component = ((project) => {
    const taskEditContent = document.createElement(`div`)
    taskEditContent.classList.add(`main-content`)
    taskEditContent.classList.add(`task-edit-content`)

    const mainHeader = document.createElement(`div`)
    mainHeader.classList.add(`main-header`)

    const backBtn = document.createElement(`button`)
    backBtn.classList.add(`btn`)
    backBtn.setAttribute(`project-id`, project.id)
    backBtn.setAttribute(`type`, `button`)
    
    const span = document.createElement(`span`)
    span.classList.add(`iconify`)
    span.setAttribute(`data-icon`, `mdi-arrow-left`)

    backBtn.appendChild(span)

    backBtn.appendChild(document.createTextNode(` ` + project.name))

    mainHeader.appendChild(backBtn)

    taskEditContent.appendChild(mainHeader)

    const legendName = `Edit task details`
    const saveBtnName = `Save changes`

    taskEditContent.appendChild(TaskForm(legendName, saveBtnName))

    return taskEditContent
});

export default component

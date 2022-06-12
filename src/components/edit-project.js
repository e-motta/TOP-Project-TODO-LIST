import ProjectForm from './project-form.js'

const component = ((project) => {
    const projectEditContent = document.createElement(`div`)
    projectEditContent.classList.add(`main-content`)
    projectEditContent.classList.add(`project-edit-content`)

    const mainHeader = document.createElement(`div`)
    mainHeader.classList.add(`main-header`)

    const backButton = document.createElement(`button`)
    backButton.classList.add(`btn`)
    backButton.setAttribute(`type`, `button`)

    const span = document.createElement(`span`)
    span.classList.add(`iconify`)
    span.setAttribute(`data-icon`, `mdi-arrow-left`)

    backButton.appendChild(span)

    backButton.appendChild(document.createTextNode(` Personal`))  // *

    mainHeader.appendChild(backButton)

    projectEditContent.appendChild(mainHeader)

    const title = `Edit project details`
    const saveBtn = document.createElement(`button`)
    saveBtn.classList.add(`btn`)
    saveBtn.classList.add(`add-task-btn`)
    saveBtn.classList.add(`save-btn`)
    saveBtn.type = `submit`
    saveBtn.appendChild(document.createTextNode(`Save changes`))

    projectEditContent.appendChild(ProjectForm(project, title, saveBtn))

    return projectEditContent
});

export default component
const component = ((title, saveBtnName, project=null) => {
    const form = document.createElement(`form`)
    form.classList.add(`edit-form`)
    form.action = `#`
    form.method = `post`
    
    const fieldset = document.createElement(`fieldset`)
    fieldset.classList.add(`edit-fieldset`)

    const legend = document.createElement(`legend`)
    legend.innerText = title

    fieldset.appendChild(legend)

    const projectLabel = document.createElement(`label`)
    projectLabel.setAttribute(`for`, `title`)
    projectLabel.appendChild(document.createTextNode(`Project`))

    fieldset.appendChild(projectLabel)

    const projectInput = document.createElement(`input`)
    projectInput.classList.add(`input`)
    projectInput.id = `title`
    projectInput.type = `text`
    projectInput.setAttribute(`required`, `required`)

    fieldset.appendChild(projectInput)

    const descriptionLabel = document.createElement(`label`)
    descriptionLabel.setAttribute(`for`, `description`)
    descriptionLabel.appendChild(document.createTextNode(`Description`))

    fieldset.appendChild(descriptionLabel)

    const descriptionInput = document.createElement(`textarea`)
    descriptionInput.classList.add(`input`)
    descriptionInput.id = `description`
    descriptionInput.setAttribute(`type`, `text`)
    descriptionInput.rows = 5

    fieldset.appendChild(descriptionInput)

    form.appendChild(fieldset)

    const saveBtn = document.createElement(`button`)
    saveBtn.classList.add(`btn`)
    saveBtn.classList.add(`add-task-btn`)
    saveBtn.classList.add(`save-btn`)
    console.log(project)
    if (project !== null) saveBtn.setAttribute(`project-id`, project.id)
    saveBtn.type = `submit`
    saveBtn.appendChild(document.createTextNode(saveBtnName))

    form.appendChild(saveBtn)

    return form
});

export default component

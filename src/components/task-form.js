const component = ((legendName, saveBtnName, project, task=null) => {
    const form = document.createElement(`form`)
    form.classList.add(`edit-form`)
    form.action = `#`
    form.method = `post`
    
    const fieldset = document.createElement(`fieldset`)
    fieldset.classList.add(`edit-fieldset`)

    const legend = document.createElement(`legend`)
    legend.innerText = legendName

    fieldset.appendChild(legend)

    const taskLabel = document.createElement(`label`)
    taskLabel.setAttribute(`for`, `title`)
    taskLabel.appendChild(document.createTextNode(`Task`))

    fieldset.appendChild(taskLabel)

    const taskInput = document.createElement(`input`)
    taskInput.classList.add(`input`)
    taskInput.id = `title`
    taskInput.type = `text`
    taskInput.setAttribute(`required`, `required`)

    fieldset.appendChild(taskInput)

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

    const dueDateLabel = document.createElement(`label`)
    dueDateLabel.for = `due-date`
    dueDateLabel.textContent = `Due date`

    fieldset.appendChild(dueDateLabel)

    const dueDateInput = document.createElement(`input`)
    dueDateInput.classList.add(`input`)
    dueDateInput.id = `due-date`
    dueDateInput.setAttribute(`required`, `required`)
    dueDateInput.setAttribute(`type`, `date`)  // *

    fieldset.appendChild(dueDateInput)

    const priorityLabel = document.createElement(`label`)
    priorityLabel.for = `priority`
    priorityLabel.textContent = `Priority`

    fieldset.appendChild(priorityLabel)

    const dropdown = document.createElement(`div`)
    dropdown.classList.add(`dropdown`)

    const priorityColor = document.createElement(`div`)
    priorityColor.classList.add(`priority-color`)  // *
    
    dropdown.appendChild(priorityColor)

    const dropdownSelect = document.createElement(`select`)  // *
    dropdownSelect.classList.add(`input`)
    dropdownSelect.id = `priority`

    const optionLow = document.createElement(`option`)
    optionLow.value = `low`
    optionLow.textContent = `Low`

    dropdownSelect.appendChild(optionLow)

    const optionMedium = document.createElement(`option`)
    optionMedium.value = `medium`
    optionMedium.textContent = `Medium`

    dropdownSelect.appendChild(optionMedium)

    const optionHigh = document.createElement(`option`)
    optionHigh.value = `high`
    optionHigh.textContent = `High`

    dropdownSelect.appendChild(optionHigh)

    dropdown.appendChild(dropdownSelect)

    fieldset.appendChild(dropdown)

    form.appendChild(fieldset)

    const saveBtn = document.createElement(`button`)
    saveBtn.classList.add(`btn`)
    saveBtn.classList.add(`add-task-btn`)
    saveBtn.classList.add(`save-btn`)
    saveBtn.setAttribute(`project-id`, project.id)
    if (task !== null) saveBtn.setAttribute(`task-id`, task.id)
    saveBtn.type = `submit`
    saveBtn.appendChild(document.createTextNode(saveBtnName))

    form.appendChild(saveBtn)

    return form
});

export default component

// import navigation module

const addResponsive = () => {
    const priorityColor = document.querySelector(`.priority-color`)
    const priority = document.querySelector(`#priority`)

    priority.addEventListener(`change`, () => {
        priorityColor.classList.remove(`low`)
        priorityColor.classList.remove(`medium`)
        priorityColor.classList.remove(`high`)
        
        priorityColor.classList.add(priority.value)
    })
}

const addNavigation = () => {
    // * Temp
    const newTask = () => console.log(`save nav`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, newTask)
}

const displayContent = () => {
    const priorityColor = document.querySelector(`.priority-color`)
    priorityColor.classList.add(`low`)
}

const updateContent = (task) => {
    const taskInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)
    const dueDate = document.querySelector(`#due-date`)
    const priority = document.querySelector(`#priority`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, e => {  // use project module methods?
        e.preventDefault()

        task.name = taskInput.value
        task.description = descriptionInput.value
        task.dueDate = dueDate.value
        task.priority = priority.value
    })
}

const react = (task) => {
    addResponsive()
    addNavigation()
    updateContent(task)
}

export default react
import navigate from "../navigate"
import projectsModule from '../projects'

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
    const backBtn = document.querySelector(`.main-header>.btn`)
    backBtn.addEventListener(`click`, navigate.project)
}

const displayContent = (task) => {
    const taskInput = document.querySelector(`#title`)
    taskInput.value = task.name

    const descriptionInput = document.querySelector(`#description`)
    descriptionInput.value = task.description

    const dueDate = document.querySelector(`#due-date`)
    dueDate.value = task.dueDate

    const priority = document.querySelector(`#priority`)
    priority.value = task.priority

    const priorityColor = document.querySelector(`.priority-color`)
    priorityColor.classList.add(priority.value)
}

const updateContent = () => {
    const taskInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)
    const dueDate = document.querySelector(`#due-date`)
    const priority = document.querySelector(`#priority`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, e => {
        const form = document.querySelector(`form`)
        const isFormValid = form.checkValidity()
        if (!isFormValid) {
            form.reportValidity()
        } else {
            e.preventDefault()

            const projectId = e.target.getAttribute(`project-id`)
            const taskId = e.target.getAttribute(`task-id`)
            projectsModule.editTask(
                projectId,
                taskId,
                taskInput.value,
                dueDate.value,
                descriptionInput.value,
                priority.value
                )

            // create mock element to call navigate method with click event
            const mockElement = document.createElement(`a`)
            mockElement.setAttribute(`project-id`, projectId)
            mockElement.addEventListener(`click`, navigate.project)
            mockElement.click()
        }
    })
}

const react = (task) => {
    addResponsive()
    addNavigation()
    displayContent(task)
    updateContent()
}

export default react

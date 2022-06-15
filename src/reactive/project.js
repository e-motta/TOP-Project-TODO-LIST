import navigate from '../navigate'
import projectsModule from "../projects"

const addNavigation = () => {
        const allProjects = document.querySelector(`#back-all-projects`)
        allProjects.addEventListener(`click`, navigate.home)  // #
    
        const editProjectBtn = document.querySelector(`.edit-project-btn`)
        editProjectBtn.addEventListener(`click`, navigate.editProject)  // #

        const addTaskBtn = document.querySelector(`.add-task-btn`)
        addTaskBtn.addEventListener(`click`, navigate.newTask)  // #

        const expandTasksBtns = document.querySelectorAll(`.chevron-down-task-btn`)
        expandTasksBtns.forEach((btn, i) => btn.addEventListener(`click`, () => {
            const taskExpand = document.querySelector(`#task-expand-${i}`)
            taskExpand.classList.toggle(`hide`)
        }))

        const editTaskBtns = document.querySelectorAll(`.edit-task-btn`)
        editTaskBtns.forEach((btn) => btn.addEventListener(`click`, navigate.editTask))
}

const displayContent = (project) => {
    project.tasks.forEach((t) => {
        const checkbox = document.querySelector(`#check-${t.id}`)
        const taskTitle = document.querySelector(`#task-title-${t.id}`)
        const dueDate = document.querySelector(`#due-date-${t.id}`)
        const taskName = document.querySelector(`#task-name-${t.id}`)

        if (t.done) {
            checkbox.setAttribute(`checked`, `checked`)
            taskTitle.classList.add(`task-title-done`)
            dueDate.classList.add(`due-date-done`)
            taskName.classList.add(`done`)
        } else {
            checkbox.removeAttribute(`checked`)
            taskTitle.classList.remove(`task-title-done`)
            dueDate.classList.remove(`due-date-done`)
            taskName.classList.remove(`done`)
        }
    })
}

const updateContent = (project) => {
    // Project
    // Delete project
    const confirmDeleteProject = e => {
        const confirmed = confirm(`Are you sure you want to delete the project?`)
        if (confirmed) {
            projectsModule.deleteProject(e.target.getAttribute(`project-id`))
            navigate.home()
            navigate.reloadSidebar()
        }
    }
    const deleteProjectBtn = document.querySelector(`.delete-project-btn`)
    deleteProjectBtn.addEventListener(`click`, confirmDeleteProject)

    // Tasks
    project.tasks.forEach((task) => {
        // Task is done/undone
        const checkbox = document.querySelector(`#check-${task.id}`)
        checkbox.addEventListener(`change`, function() {
            const done = this.checked
            projectsModule.toggleDoneTask(project, task, done)
            displayContent(project)
        })
        
        // Delete task
        const confirmDeleteTask = e => {
            const confirmed = confirm(`Are you sure you want to delete the task?`)
            if (confirmed) {
                projectsModule.deleteTask(
                    e.target.getAttribute(`project-id`),
                    e.target.getAttribute(`task-id`)
                    )
                navigate.project(e)
            }
        }
        const deleteTaskBtn = document.querySelector(`#trash-task-btn-${task.id}`)
        deleteTaskBtn.addEventListener(`click`, confirmDeleteTask)
    })
}

const react = (project) => {
    addNavigation()
    displayContent(project)
    updateContent(project)
}

export default react

// import navigation module

const addNavigation = () => {
        // *** Temp
        const navigateToAllProjects = () => console.log(`temp`)
        const navigateToEditProject = () => console.log(`temp`)
        const navigateToAddTask = () => console.log(`temp`)
        const navigateToEditTask = () => console.log(`temp`)

    
        // Project
        const allProjects = document.querySelector(`#back-all-projects`)
        allProjects.addEventListener(`click`, navigateToAllProjects)  // #
    
        const editProjectBtn = document.querySelector(`#edit-project-btn`)
        editProjectBtn.addEventListener(`click`, navigateToEditProject)  // #
    
        const addTaskBtn = document.querySelector(`#add-task-btn`)
        addTaskBtn.addEventListener(`click`, navigateToAddTask)  // #

        const expandTasksBtns = document.querySelectorAll(`.chevron-down-task-btn`)
        expandTasksBtns.forEach((btn, i) => btn.addEventListener(`click`, () => {
            const taskExpand = document.querySelector(`#task-expand-${i}`)
            taskExpand.classList.toggle(`hide`)
        }))

        const editTaskBtns = document.querySelectorAll(`.edit-task-btn`)
        editTaskBtns.forEach((btn) => btn.addEventListener(`click`, navigateToEditTask))
}

const displayContent = (project) => {
    // Tasks
    for (let i = 0; i < project.tasks.length; i++) {
        const task = project.tasks[i]

        const checkbox = document.querySelector(`#check-${i}`)
        const taskTitle = document.querySelector(`#task-title-${i}`)
        const dueDate = document.querySelector(`#due-date-${i}`)
        const taskName = document.querySelector(`#task-name-${i}`)

        if (task.done) {
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
    }
}

const updateContent = (project) => {
    // * Temp
    const deleteTask = () => console.log(`delete`)
    
    //
    for (let i = 0; i < project.tasks.length; i++) {
        const task = project.tasks[i]

        // Task is done/undone
        const checkbox = document.querySelector(`#check-${i}`)
        checkbox.addEventListener(`change`, function() {
            if (this.checked) {
                task.done = true
            } else {
                task.done = false
            }
            console.log(project.tasks)

            displayContent(project)
        })
        
        // Delete task
        const deleteTaskBtn = document.querySelector(`#trash-task-btn-${i}`)
        deleteTaskBtn.addEventListener(`click`, deleteTask)  // #
    }
}

const react = (project) => {
    updateContent(project)
    addNavigation()
    displayContent(project)
}

export default react
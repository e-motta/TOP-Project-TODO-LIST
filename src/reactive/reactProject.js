const populate = (project) => {
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
            taskTitle.classList.remove(`task-title-done`)
            dueDate.classList.remove(`due-date-done`)
            taskName.classList.remove(`done`)
        }
        console.log(project)
    }
}

const react = (project) => {
    populate(project)

    for (let i = 0; i < project.tasks.length; i++) {
        const task = project.tasks[i]
        const checkbox = document.querySelector(`#check-${i}`)

        checkbox.addEventListener(`change`, function() {
            if (this.checked) {
                task.done = true
            } else {
                task.done = false
            }
            populate(project)
        })
    }
}

export default react
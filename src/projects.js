const module = (() => {
    let projects = [
        {
            id: 0,
            name: `Tutorial 1 - Projects`,
            pending: 1,
            completed: 1,
            description: `This is an example project. Open it and expand the tasks to see some tips.`,
            tasks: [
                {
                    id: 0,
                    name: `Open projects`,
                    dueDate: `2020-11-11`,
                    description: `To open projects, you can click either the "OPEN" button in the home page cards, or the menu items in the sidebar.`,
                    priority: `low`,
                    done: false,
                },
                {
                    id: 1,
                    name: `Change projects`,
                    dueDate: `2021-11-11`,
                    description: `You can edit or delete projects by clicking the pencil or trash icons in the upper right corner.`,
                    priority: `low`,
                    done: false,
                },
                {
                    id: 2,
                    name: `Add projects`,
                    dueDate: `2021-06-18`,
                    description: `Adding projects is as easy as clicking the "+ ADD PROJECT" button in the sidebar`,
                    priority: `high`,
                    done: false,
                },
            ]
        },
        {
            id: 1,
            name: `Tutorial 2 - Tasks`,
            pending: 0,
            completed: 1,
            description: `In the home page card, descriptions occupy a maximum of 2 lines. You can hover over the description or open the project to see the full description when they are too long.`,
            tasks: [
                {
                    id: 0,
                    name: `Low priority task`,
                    dueDate: `2022-06-22`,
                    description: `This is a low priority task, as indicated by the color green to the left. You can edit it by clicking the task pencil icon.`,
                    priority: `low`,
                    done: false,
                },
                {
                    id: 1,
                    name: `Done task`,
                    dueDate: `2022-12-25`,
                    description: `This task is already done, as indicated by the checkbox and striked text. You can uncheck it to mark it as undone.`,
                    priority: `high`,
                    done: true,
                },
                {
                    id: 2,
                    name: `Superfluous task`,
                    dueDate: `2022-12-30`,
                    description: `You can delete tasks by clicking the task trash icon. You can also add tasks by clicking the "+ ADD TASK" button below.`,
                    priority: `medium`,
                    done: true,
                },
            ]
        },
        
    ]
    
    const updatePending = (project) => {
        const updatedPending = project.tasks.reduce((total, task) => {
            const done = !task.done ? 1 : 0
            return total + done
        }, 0)
        
        project.pending = updatedPending
    }

    const updateCompleted = (project) => {
        const updatedCompleted = project.tasks.reduce((total, task) => {
            const done = task.done ? 1 : 0
            return total + done
        }, 0)
        
        project.completed = updatedCompleted
    }

    const updateTasksStats = (project) => {
        updatePending(project)
        updateCompleted(project)
    }

    const toggleDoneTask = (project, task, done) => {
        if (done) {
            task.done = true
        } else {
            task.done = false
        }

        updateTasksStats(project)
    }

    const addNewProject = (name, description) => {
        const p = {
            id: projects.length >= 1 ? projects[projects.length - 1].id + 1 : 0,
            name: name,
            pending: 0,
            completed: 0,
            description: description,
            tasks: []
        }
        projects.push(p)

        return p.id
    }

    const editProject = (projectId, newName, newDescription) => {
        const project = projects.find(p => p.id.toString() === projectId)
        project.name = newName
        project.description = newDescription
    }
    
    const deleteProject = projectId => {
        // filter in place
        projects.splice(0, projects.length, ...projects.filter(p => p.id.toString() !== projectId))
    }
    
    const addNewTask = (projectId, name, dueDate, description, priority) => {
        const p = projects.find(p => p.id.toString() === projectId)
        
        const t = {
            id: p.tasks.length >= 1 ? p.tasks[p.tasks.length - 1].id + 1 : 0,
            name: name,
            dueDate: dueDate,
            description: description,
            priority: priority,
            done: false
        }
    
        p.tasks.push(t)
        updateTasksStats(p)
    }

    const editTask = (projectId, taskId, newName, newDueDate, newDescription, newPriority) => {
        const p = projects.find(p => p.id.toString() === projectId)
        const t = p.tasks.find(t => t.id.toString() === taskId)

        t.name = newName
        t.dueDate = newDueDate
        t.description = newDescription
        t.priority = newPriority
    }
    
    const deleteTask = (projectId, taskId) => {
        const p = projects.find(p => p.id.toString() === projectId)
        p.tasks = p.tasks.filter(t => t.id.toString() !== taskId)
        updateTasksStats(p)
    }

    return {
        projects,
        toggleDoneTask,
        addNewProject,
        editProject,
        deleteProject,
        addNewTask,
        editTask,
        deleteTask
    }
})();

export default module

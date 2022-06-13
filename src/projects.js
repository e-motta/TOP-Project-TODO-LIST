const module = (() => {
    const projects = [
        {
            id: 0,
            name: `Personal`,
            pending: 6,
            completed: 5,
            description: `This is a new description`,
            tasks: [
                {
                    id: 0,
                    name: `Do the dishes`,
                    dueDate: `2022-12-22`,
                    description: `Personal description`,
                    priority: `medium`,
                    done: true,
                },
            ]
        },
        {
            id: 1,
            name: `Work`,
            pending: 1,
            completed: 2,
            description: `This is a work project description`,
            tasks: [
                {
                    id: 0,
                    name: `File suit`,
                    dueDate: `2021-11-11`,
                    description: `Description`,
                    priority: `low`,
                    done: true,
                },
                {
                    id: 1,
                    name: `Read papers`,
                    dueDate: `2021-06-18`,
                    description: ``,
                    priority: `high`,
                    done: false,
                },
            ]
        },
    ]
    
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
    
    const deleteProject = projectId => {
        projects = projects.filter(p => p.id !== projectId)
    }
    
    const addNewTask = (projectId, name, dueDate, description, priority) => {
        const p = projects.find(p => p.id === projectId)
        
        const t = {
            id: p.tasks.length >= 1 ? p.tasks[p.tasks.length - 1].id + 1 : 0,
            name: name,
            dueDate: dueDate,
            description: description,
            priority: priority,
            done: false
        }
    
        p.tasks.push(t)
    }
    
    const deleteTask = (projectId, taskId) => {
        const p = projects.find(p => p.id === projectId)
    
        p.tasks = p.tasks.filter(t => t.id !== taskId)
    }

    return { projects, addNewProject, deleteProject, addNewTask, deleteTask }
})();

export default module

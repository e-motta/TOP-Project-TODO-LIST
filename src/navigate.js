import Header from './components/header.js'
import Sidebar from './components/sidebar.js'
import AllProjects from './components/all-projects.js'
import Project from './components/project.js'
import NewProject from './components/new-project.js'
import EditProject from './components/edit-project.js'
import NewTask from './components/new-task.js'
import EditTask from './components/edit-task.js'

import reactSidebar from './reactive/sidebar.js'
import reactAllProjects from './reactive/all-projects.js'
import reactProject from './reactive/project.js'
import reactNewProject from './reactive/new-project.js'
import reactEditProject from './reactive/edit-project.js'
import reactNewTask from './reactive/new-task.js'
import reactEditTask from './reactive/edit-task.js'

import projects from './projects.js'

const navigate = ((projects) => {
    const initialLoad = () => {
        const content = document.querySelector(`.content`)
    
        content.appendChild(Header)
        content.appendChild(Sidebar(projects))
        
        reactSidebar()
        
        const main = document.createElement(`div`)
        main.classList.add(`main`)
        content.appendChild(main)

        home(projects)
    }

    const home = () => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(AllProjects(projects))

        reactAllProjects(projects)
    }

    const project = e => {
        const project = projects.find(p => p.id.toString() === e.target.getAttribute(`project-id`))

        const main = document.querySelector(`.main`)
        main.replaceChildren(Project(project))

        reactProject(project)
    }

    const newProject = e => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(NewProject())

        reactNewProject()
    }

    const editProject = e => {
        const project = projects.find(p => p.id.toString() === e.target.getAttribute(`project-id`))
        const main = document.querySelector(`.main`)
        main.replaceChildren(EditProject(project))

        reactEditProject(project)
    }

    const newTask = e => {
        const project = projects.find(p => p.id.toString() === e.target.getAttribute(`project-id`))
        
        const main = document.querySelector(`.main`)
        main.replaceChildren(NewTask(project))

        reactNewTask(project)
    }

    const editTask = e => {
        const project = projects.find(p => p.id.toString() === e.target.getAttribute(`project-id`))
        const task = project.tasks.find(t => t.id.toString() === e.target.getAttribute(`task-id`))

        const main = document.querySelector(`.main`)
        main.replaceChildren(EditTask(project))

        reactEditTask(task)
    }

    return {
        initialLoad,
        home,
        project,
        newProject,
        editProject,
        newTask,
        editTask
    }
})(projects);

export default navigate

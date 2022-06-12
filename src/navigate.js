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
    const loadBasics = () => {
        const content = document.querySelector(`.content`)
    
        content.appendChild(Header)
        content.appendChild(Sidebar)
        
        reactSidebar()
        
        const main = document.createElement(`div`)
        main.classList.add(`main`)
        content.appendChild(main)
    }

    const home = () => {
        const props = [projects]

        const main = document.querySelector(`.main`)
        main.replaceChildren(AllProjects(...props))

        reactAllProjects(...props)
    }

    const project = (e) => {
        console.log(e.target.id)
        const project = projects.find(p => p.id.toString() === e.target.id)
        console.log(project)

        const props = [project]

        const main = document.querySelector(`.main`)
        main.replaceChildren(Project(...props))

        reactProject(...props)
    }

    const newProject = () => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(NewProject())

        reactNewProject()
    }

    const editProject = (project) => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(EditProject(project))

        reactEditProject(project)
    }

    const newTask = () => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(NewTask())

        reactNewTask()
    }

    const editTask = (project, task) => {
        const main = document.querySelector(`.main`)
        main.replaceChildren(EditTask(project))

        reactEditTask(task)
    }

    return {
        loadBasics,
        home,
        project,
        newProject,
        editProject,
        newTask,
        editTask
    }
})(projects);

export default navigate

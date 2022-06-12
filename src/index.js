import './reset.css';
import './style.css';
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

const content = document.querySelector(`.content`)

content.appendChild(Header)
content.appendChild(Sidebar)

reactSidebar()

const main = document.createElement(`div`)
main.classList.add(`main`)
content.appendChild(main)

const projects = [
    {
        name: `Personal`,
        pending: 6,
        completed: 5,
        description: `This is a new description`,
        tasks: [
            {
                name: `Do the dishes`,
                dueDate: `2022-12-22`,
                description: `Personal description`
            },
        ]
    },
    {
        name: `Work`,
        pending: 1,
        completed: 2,
        description: `This is a work project description`,
        tasks: [
            {
                name: `File suit`,
                dueDate: `2021-11-11`,
                description: `Description`,
                priority: `low`,
                done: true,
            },
            {
                name: `Read papers`,
                dueDate: `2021-06-18`,
                description: ``,
                priority: `high`,
                done: false,
            },
        ]
    },
]

// // SHOW NEW TASK PAGE // //

// const project = projects.find(p => p.name === `Work`)
// const projectName = project.name
// const props = [projectName]
// main.appendChild(NewTask(...props))

// const task = project.tasks[0]
// reactNewTask(task)

// // SHOW EDIT TASK PAGE // //

const project = projects.find(p => p.name === `Work`)
const projectName = project.name
const props = [projectName]
main.appendChild(EditTask(...props))

const task = project.tasks[1]
reactEditTask(task)



// // SHOW NEW PROJECT PAGE // // 

// const project = projects.find(p => p.name === `Work`)
// const props = [project]
// main.appendChild(NewProject(...props))

// reactNewProject(...props)


// // SHOW EDIT PROJECT PAGE // // 

// const project = projects.find(p => p.name === `Work`)
// const props = [project]
// main.appendChild(EditProject(...props))

// reactEditProject(...props)


// // SHOW ALL PROJECTS PAGE // // 

// const props = [projects]
// main.appendChild(AllProjects(...props))

// reactAllProjects(...props)


// // SHOW PROJECT PAGE // // 

// const project = projects.find(p => p.name === `Work`)
// const props = [project]
// main.appendChild(Project(...props))

// reactProject(...props)


// // To edit HTML directly // //

// const content = document.querySelector(`.content`)

// const main = document.querySelector(`.main`)

// content.insertBefore(Header, main)
// content.insertBefore(Sidebar, main)

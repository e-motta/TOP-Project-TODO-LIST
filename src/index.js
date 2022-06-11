import './reset.css';
import './style.css';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js'
import AllProjects from './components/allProjects.js'
import Project from './components/project.js'
import updateProject from './reactive/updateProject.js'


const content = document.querySelector(`.content`)

content.appendChild(Header)
content.appendChild(Sidebar)

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
                dueDate: `22/22/2022`,
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
                dueDate: `11/11/2021`,
                description: `Description`,
                priority: `low`,
                done: true,
            },
            {
                name: `Read papers`,
                dueDate: `18/06/2021`,
                description: ``,
                priority: `high`,
                done: false,
            },
        ]
    },
]

const props = [projects.find(p => p.name === `Work`)]
main.appendChild(Project(...props))

updateProject(...props)




// // To edit HTML directly // //
// const content = document.querySelector(`.content`)

// const main = document.querySelector(`.main`)

// content.insertBefore(Header, main)
// content.insertBefore(Sidebar, main)

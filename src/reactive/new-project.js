import navigate from "../navigate"
import projectsModule from "../projects"

const projects = projectsModule.projects

const addNavigation = () => {
    // * Temp
    const newProject = () => console.log(`save nav`)

    const backBtn = document.querySelector(`.main-header>.btn`)
    backBtn.addEventListener(`click`, navigate.home)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, newProject)
}

const updateContent = (project) => {
    const projectInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, e => {
        e.preventDefault()

        const newProjectId = projectsModule.addNewProject(projectInput.value, descriptionInput.value)
        console.log(newProjectId)

        const newProject = projects.find(p => p.id === newProjectId) /////////////////////
        navigate.project(newProject)
    })
}

const react = (project) => {
    addNavigation()
    updateContent(project)
}

export default react

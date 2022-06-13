import navigate from "../navigate"
import projectsModule from "../projects"

const addNavigation = () => {
    const backBtn = document.querySelector(`.main-header>.btn`)
    backBtn.addEventListener(`click`, navigate.home)
}

const updateContent = () => {
    const projectInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, e => {
        e.preventDefault()

        const newProjectId = projectsModule.addNewProject(projectInput.value, descriptionInput.value)

        // create mock element to call navigate method with click event
        const mockElement = document.createElement(`a`)
        mockElement.setAttribute(`project-id`, newProjectId)
        mockElement.addEventListener(`click`, navigate.project)
        mockElement.click()
    })
}

const react = () => {
    addNavigation()
    updateContent()
}

export default react

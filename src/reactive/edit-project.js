import navigate from "../navigate"
import projectsModule from "../projects"

const addNavigation = () => {
    const backBtn = document.querySelector(`.main-header>.btn`)
    backBtn.addEventListener(`click`, navigate.project)
}

const displayContent = (project) => {
    const projectInput = document.querySelector(`#title`)
    projectInput.value = project.name

    const descriptionInput = document.querySelector(`#description`)
    descriptionInput.value = project.description
}

const updateContent = (project) => {
    const projectInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, e => {
        const form = document.querySelector(`form`)
        const isFormValid = form.checkValidity()
        if (!isFormValid) {
            form.reportValidity()
        } else {
            e.preventDefault()

            const projectId = e.target.getAttribute(`project-id`)
            projectsModule.editProject(
                projectId, 
                projectInput.value, 
                descriptionInput.value
                )
    
            // create mock element to call navigate method with click event
            const mockElement = document.createElement(`a`)
            mockElement.setAttribute(`project-id`, projectId)
            mockElement.addEventListener(`click`, navigate.project)
            mockElement.click()
    
            navigate.reloadSidebar()
        }
    })
}

const react = (project) => {
    addNavigation()
    displayContent(project)
    updateContent(project)
}

export default react

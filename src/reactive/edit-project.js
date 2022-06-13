import navigate from "../navigate.js"

const addNavigation = () => {
    // * Temp
    const saveChanges = () => console.log(`save nav`)

    const backBtn = document.querySelector(`.main-header>.btn`)
    backBtn.addEventListener(`click`, navigate.project)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, saveChanges)
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
    saveBtn.addEventListener(`click`, e => {  // use project module methods?
        e.preventDefault()

        project.name = projectInput.value
        project.description = descriptionInput.value
        console.log(project)
    })
}

const react = (project) => {
    addNavigation()
    displayContent(project)
    updateContent(project)
}

export default react
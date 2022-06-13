import navigate from "../navigate.js"

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
    saveBtn.addEventListener(`click`, e => {  // use project module methods?
        e.preventDefault()
    })
}

const react = (project) => {
    addNavigation()
    updateContent(project)
}

export default react
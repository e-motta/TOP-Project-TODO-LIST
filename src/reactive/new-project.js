// import navigation module

const addNavigation = () => {
    // * Temp
    const saveChanges = () => console.log(`save nav`)

    const saveBtn = document.querySelector(`.save-btn`)
    saveBtn.addEventListener(`click`, saveChanges)
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
    updateContent(project)
}

export default react
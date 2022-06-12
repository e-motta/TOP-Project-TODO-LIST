// import navigation module

const addNavigation = () => {
    // * Temp
    const navigateToAllProjects = () => console.log(`nav all proj`)
    const navigateToProject = () => console.log(`project`)
    const navigateToAddProject = () => console.log(`nav add proj`)

    //
    const allProjects = document.querySelector(`#all-projects`)
    allProjects.addEventListener(`click`, navigateToAllProjects)

    const menuItems = document.querySelectorAll(`.subitem`)
    menuItems.forEach(item => item.addEventListener(`click`, navigateToProject))

    const addProjectBtn = document.querySelector(`ul>.add-project-btn`)
    addProjectBtn.addEventListener(`click`, navigateToAddProject)
}

const react = () => {
    addNavigation()
}

export default react

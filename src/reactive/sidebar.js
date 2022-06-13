import navigate from '../navigate'

const addNavigation = () => {
    const allProjects = document.querySelector(`#all-projects`)
    allProjects.addEventListener(`click`, navigate.home)

    const menuItems = document.querySelectorAll(`.subitem`)
    menuItems.forEach(item => item.addEventListener(`click`, navigate.project))

    const addProjectBtn = document.querySelector(`ul>.add-project-btn`)
    addProjectBtn.addEventListener(`click`, navigate.newProject)
}

const react = () => {
    addNavigation()
}

export default react

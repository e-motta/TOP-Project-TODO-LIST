import navigate from '../navigate.js'

const addNavigation = () => {
    const openProjectBtns = document.querySelectorAll(`.project-btn`)
    openProjectBtns.forEach(btn => btn.addEventListener(`click`, navigate.project))
}

const react = () => {
    addNavigation()
}

export default react
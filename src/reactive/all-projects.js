// import navigation module

const addNavigation = () => {
    // * Temp
    const navigateToProject = () => console.log(`test`)

    //
    const openProjectBtns = document.querySelectorAll(`.project-btn`)
    openProjectBtns.forEach(btn => btn.addEventListener(`click`, navigateToProject))
}

const react = (projects) => {
    addNavigation()
}

export default react
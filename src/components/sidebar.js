const component = (() => {
    const sidebar = document.createElement(`div`)
    sidebar.classList.add(`sidebar`)

    const sidebarMenuContainer = document.createElement(`ul`)
    sidebarMenuContainer.classList.add(`sidebar-menu-container`)

    const menuItem = document.createElement(`li`)
    menuItem.classList.add(`menu-item`)

    const menuLink = document.createElement(`a`)
    menuLink.classList.add(`menu-link`)

    const iconifyClipboard = document.createElement(`span`)
    iconifyClipboard.classList.add(`iconify`)
    iconifyClipboard.setAttribute(`data-icon`, `mdi-clipboard-check-multiple`)

    menuLink.appendChild(iconifyClipboard)
    menuLink.appendChild(document.createTextNode(` Projects`))
    
    menuItem.appendChild(menuLink)

    const subitemsContainer = document.createElement(`ul`)
    subitemsContainer.classList.add(`subitems-container`)

    const subitems = [`Personal`, `Work`]

    for(const subitem of subitems) {
        const li = document.createElement(`li`)
        li.classList.add(`subitem`)

        const a = document.createElement(`a`)
        a.classList.add(`menu-link`)
        a.innerText = subitem

        li.appendChild(a)

        subitemsContainer.appendChild(li)
    }

    menuItem.appendChild(subitemsContainer)
    sidebarMenuContainer.appendChild(menuItem)

    const addProjectBtn = document.createElement(`div`)
    addProjectBtn.classList.add(`btn`)
    addProjectBtn.classList.add(`add-project-btn`)

    const iconifyPlus = document.createElement(`span`)
    iconifyPlus.classList.add(`iconify`)
    iconifyPlus.setAttribute(`data-icon`, `mdi-plus`)

    addProjectBtn.appendChild(iconifyPlus)

    const addItemText = document.createElement(`span`)
    addItemText.classList.add(`add-item-text`)
    addItemText.appendChild(document.createTextNode(`ADD PROJECT`))

    addProjectBtn.appendChild(addItemText)

    sidebarMenuContainer.appendChild(addProjectBtn)

    sidebar.appendChild(sidebarMenuContainer)

    return sidebar
})();

export default component;
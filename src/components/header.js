const component = (() => {
    const header = document.createElement(`div`)
    header.classList.add(`header`)

    const logo = document.createElement(`span`)
    logo.classList.add(`logo`)
    logo.appendChild(document.createTextNode(`Task `))

    const logoCheckbox = document.createElement(`span`)
    logoCheckbox.classList.add(`logo-checkbox`)

    const iconify = document.createElement(`span`)
    iconify.classList.add(`iconify`)
    iconify.setAttribute(`data-icon`, `mdi-check`)

    logoCheckbox.appendChild(iconify)
    logo.appendChild(logoCheckbox)

    logo.appendChild(document.createTextNode(` iewer`))

    header.appendChild(logo)

    return header
})();

export default component;

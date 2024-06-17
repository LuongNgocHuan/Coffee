
const topMenu = document.getElementById('lnh-top-menu')
const toggleTopMenuIcon = document.getElementById('lnh-toggle-top-menu-icon')


document.addEventListener('click' , (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('lnh-topmenu-expanded')
        topMenu.classList.toggle('hidden')


    } else {
        if (topMenu.classList.contains('lnh-topmenu-expanded')) {
            topMenu.classList.remove('lnh-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
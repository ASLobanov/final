const buttonPopapMenu = document.querySelector('.button-header-burger')
const asideMenu = document.querySelector('.menu')
const menuHeader = document.querySelector('.menu__header')
const menuContact = document.querySelector('.menu__contact')
const wrapperMain = document.querySelector('.wrapper-main')
const footer = document.querySelector('.footer')
//console.log('buttonPopapMenu')

buttonPopapMenu.addEventListener('click', () => {
  const headerMenu = buttonPopapMenu.classList.contains('open-menu')

  if (headerMenu) {
    asideMenu.classList.remove('open-menu')
    menuHeader.classList.remove('open-menu')
    menuContact.classList.remove('open-menu')
    wrapperMain.classList.remove('open-menu')
    footer.classList.remove('open-menu')
  } else {
    asideMenu.classList.add('open-menu')
    menuHeader.classList.add('open-menu')
    menuContact.classList.add('open-menu')
    wrapperMain.classList.add('open-menu')
    footer.classList.add('open-menu')
  }
})

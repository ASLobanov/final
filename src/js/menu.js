const buttonPopapMenu = document.querySelector('.button-header-burger')
const asideMenu = document.querySelector('.menu')
const menuHeader = document.querySelector('.menu__header')
const menuContact = document.querySelector('.menu__contact')
const wrapperMain = document.querySelector('.wrapper-main')
const footer = document.querySelector('.footer')
const headerNav = document.querySelector('.header__nav')
const divider = document.querySelector('.header__divider-two')
const dividerOne = document.querySelector('.header__divider-one')
const repairButton = document.querySelector('.button-repair')
const buttonHeader = document.querySelector('.header__group-second-one')

buttonPopapMenu.addEventListener('click', () => {
  const headerMenu = buttonPopapMenu.classList.contains('open-menu')

  if (headerMenu) {
    buttonPopapMenu.classList.remove('open-menu')
    asideMenu.classList.remove('open-menu')
    menuHeader.classList.remove('open-menu')
    menuContact.classList.remove('open-menu')
    wrapperMain.classList.remove('open-menu')
    footer.classList.remove('open-menu')
    headerNav.classList.remove('open-menu')
    divider.classList.remove('open-menu')
    repairButton.classList.remove('open-menu')
    buttonHeader.classList.remove('open-menu')
    dividerOne.classList.remove('open-menu')
  } else {
    asideMenu.classList.add('open-menu')
    menuHeader.classList.add('open-menu')
    menuContact.classList.add('open-menu')
    wrapperMain.classList.add('open-menu')
    footer.classList.add('open-menu')
    headerNav.classList.add('open-menu')
    divider.classList.add('open-menu')
    repairButton.classList.add('open-menu')
    buttonPopapMenu.classList.add('open-menu')
    buttonHeader.classList.add('open-menu')
    dividerOne.classList.add('open-menu')
  }
})

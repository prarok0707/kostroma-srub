'use strict'

const showHeaderContacts = function () {
  const btn = document.querySelector('.header__contacts-show-btn')
  const contacts = document.querySelector('.header__contacts')

  if (!btn || !contacts) return

  const contactsShow = () => {
    contacts.classList.add('header-contacts-show')
    const height = contacts.offsetHeight + 'px'

    contacts.style.height = '0px'

    setTimeout(() => {
      contacts.style.height = height
    })
  }

  const contactsClose = () => {
    contacts.style.height = '0px'

    contacts.ontransitionend = () => {
      contacts.removeAttribute('style')
      contacts.classList.remove('header-contacts-show')
      contacts.ontransitionend = null
    }
  }

  const handlerClick = (e) => {
    if (!contacts.classList.contains('header-contacts-show')) {
      contactsShow()
    } else {
      contactsClose()
    }
  }

  const handlerResize = (e) => {
    if (document.body.offsetWidth > 768) {
      contacts.removeAttribute('style')
      contacts.classList.remove('header-contacts-show')
    }
  }

  btn.addEventListener('click', handlerClick)
  window.addEventListener('resize', handlerResize)
}

export default showHeaderContacts
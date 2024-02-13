//SHOW / HIDE HAMBURGER / CHANGE COLOR NAV-LINK
const body = document.body
const hamburger = document.querySelector('.mobile-nav__hamburger-button')
const nav = document.querySelector('.mobile-nav__items')
const navLinks = document.querySelectorAll('.mobile-nav__nav-link')
const firstNavLink = document.querySelector('.first-nav-link')
const anotherNavLink = document.querySelectorAll('.another-nav-link')

const handleClick = () => {
	nav.classList.toggle('active')
	hamburger.classList.toggle('ham-rotate')
	if (body.classList.contains('nav-open')) {
		body.classList.remove('nav-open')
	} else {
		body.classList.add('nav-open')
	}
}
const hideNav = () => {
	nav.classList.remove('active')
	hamburger.classList.toggle('ham-rotate')
	body.classList.remove('nav-open')
}
const firstNavLinkHover = () => {
	firstNavLink.style.backgroundColor = 'rgb(216, 214, 214)'
	firstNavLink.style.color = 'black'
}
const firstNavLinkLeave = () => {
	firstNavLink.style.backgroundColor = 'black'
	firstNavLink.style.color = 'rgb(216, 214, 214)'
}
navLinks.forEach(link => {
	link.addEventListener('click', hideNav)
})
anotherNavLink.forEach(linki => {
	linki.addEventListener('mouseover', firstNavLinkHover)
	linki.addEventListener('mouseleave', firstNavLinkLeave)
})
hamburger.addEventListener('click', handleClick)

//FOOTER YEAR

const date = new Date()
const spanDate = date.getFullYear()
const year = document.querySelector('.year')

year.innerHTML = spanDate

//SCROLLSPY
const menuItems = document.querySelectorAll('.another-nav-link')
const scrollSpySections = document.querySelectorAll('.section')
const banner = document.querySelector('.banner')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY >= section.offsetTop - 80) {
				sections.push(section)
			}
		})
		menuItems.forEach(item => item.classList.remove('scroll-spy-active'))

		if (sections.length > 0) {
			const activeSection = document.querySelector(`[href*="${sections[sections.length - 1].id}"]`)
			activeSection.classList.add('scroll-spy-active')
			if (window.scrollY >= banner.offsetTop - 80 && window.scrollY <= banner.offsetTop + banner.offsetHeight - 80) {
				menuItems.forEach(item => item.classList.remove('scroll-spy-active'))
			}
		}
	}
}
window.addEventListener('scroll', handleScrollSpy)

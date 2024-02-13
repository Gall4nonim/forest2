
//SHOW / HIDE HAMBURGER / CHANGE COLOR NAV-LINK
const hamburger = document.querySelector('.mobile-nav__hamburger-button')
const nav = document.querySelector('.mobile-nav__items')
const navLinks = document.querySelectorAll('.mobile-nav__nav-link')
const firstNavLink = document.querySelector('.first-nav-link')
const anotherNavLink = document.querySelectorAll('.another-nav-link')

const handleClick = () => {
	nav.classList.toggle('active')
	hamburger.classList.toggle('ham-rotate')
}
const hideNav = () => {
	nav.classList.remove('active')
	hamburger.classList.toggle('ham-rotate')
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

//FORM CONTACT

const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')
const popup = document.querySelector('.popup')
const username = document.querySelector('#username')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const allFormField = [username, surname, email, msg]

function clear(e) {
	e.preventDefault()
	allFormField.forEach(el => {
		el.value = ''
		clearError(el)
	})
}
const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	errorMsg.textContent = msg
	errorMsg.classList.add('error-text-on')
}
const clearError = input => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	errorMsg.classList.remove('error-text-on')
}
const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}
const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `Minimalna ilośc znaków to ${min} `)
	}
}
const checkMail = email => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}
const checkErrors = () => {
	const allErrorMessages = document.querySelectorAll('.error-text-on')
	const errorCount = allErrorMessages.length
	if (errorCount === 0) {
		popup.classList.add('show-popup')
		allFormField.forEach(el => {
			el.value = ''
		})
		setTimeout(() => {
			popup.classList.remove('show-popup')
		}, 3500)
	}
}
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm(allFormField)
	checkLength(username, 3)
	checkLength(surname, 3)
	checkLength(msg, 30)
	checkMail(email)
	checkErrors()
})
clearBtn.addEventListener('click', clear)

//SCROLLSPY

const menuItems = document.querySelectorAll('a')
const scrollSpySection = document.querySelectorAll('.section')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySection.forEach(section => {
			console.log(window)
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)

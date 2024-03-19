document.querySelector('.header-auth-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'block'
	document.querySelector('.background').style.display = 'block'
}
document.querySelector('.cross-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'none'
	document.querySelector('.background').style.display = 'none'
}
document.querySelector('.reg-cross-btn').onclick = function () {
	document.querySelector('.registration-menu').style.display = 'none'
	document.querySelector('.background').style.display = 'none'
}
document.querySelector('.reg-btn').onclick = function () {
	document.querySelector('.reg-menu').style.display = 'block'
	document.querySelector('.registration-menu').style.height = '700px'
	document.querySelector('.up-row').style.display = 'none'
	document.querySelector('.down-row').style.display = 'none'
}
document.getElementById('auth-btn').onclick = function () {
	document.querySelector('.reg-menu').style.display = 'none'
	document.querySelector('.registration-menu').style.height = '450px'
	document.querySelector('.up-row').style.display = 'flex'
	document.querySelector('.down-row').style.display = 'flex'
}

function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = scroll / height * 100
    document.querySelector('.progress-bar').style.width = scrolled + '%'
}

window.addEventListener('scroll', progressBar)


if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
	console.log("Установлена светлая тема по умолчанию")
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="static/css/theme/light.css" onload="document.documentElement.style.display = \'\'">',
    );
} else {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log("Значок сменен")
		document.querySelectorAll(".progect-desc > a img").forEach(function(i) {i.setAttribute("src", "resourses/images/download-icon-dark.svg")})
	}
}




console.log('ok')
	
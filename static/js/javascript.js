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


class_code = [
  '<span class="code-key-word">class</span> Person {',
  '<span class="code-key-word">public</span>:',
  'full_name = <span class="code-string">"Фазлиев Динар Данилевич"</span>;',
  'birth_day[3] = {11, 12, 2004};',
  'age = get_age(birth_day);<span class="code-comment">// 17</span>',
  'school = <span class="code-string">"СУНЦ IT лицей КФУ"</span>;',
  'city = <span class="code-string">"Казань"</span>;',
  'email = <span class="code-string">"jjustdinar@gmail.com"</span>;',
  'hobbies = {<span class="code-string"> "frontend"</span>, <span class="code-string">"olympiad programming"</span>};',
  '}'
]

var line = 0
var res = ""
var count = 0
function write() {
	if (count == 0) {
	  	code_area[line].classList.add("written")
	}
	if (class_code[line][count] == '<') {
	  	while (class_code[line][count] != '>') {
			res = res + class_code[line][count]
			count++
		}
	}
	else if (class_code[line][count] == ';') {
	  	res = res + '<span class="code-semicolon">' + class_code[line][count] + '</span>'
	  	count++
	} else {
	  	res = res + class_code[line][count]
	  	count++
	}
	
	code_area[line].innerHTML = res
	console.log(line)
	if (count == class_code[line].length) {
	  	res = ""
	  	count = 0
	  	line++
	}
	if (line < class_code.length) {
	  	setTimeout(write, 50)
	}
}

code_area = document.querySelectorAll('.code-line')

setTimeout(write, 50)

function get_coords(e) {
	let card = e.target.closest('.progect-desc')
	let a = card.getBoundingClientRect()
	let zero = [a.x + Math.abs(a.width) / 2, a.y + Math.abs(a.height) / 2]
	let mouse = [e.clientX - zero[0], e.clientY - zero[1]]
	let rotateX = (mouse[0]) / (Math.abs(a.width) / 2) * 3
	let rotateY = (mouse[1]) / (Math.abs(a.height) / 2) * 3
	console.log(rotateY + '    ' + rotateX)
	card.style.transform = `skew(${rotateY}deg, ${rotateX}deg)`
}


document.querySelectorAll('.progect-desc').forEach(function(i) {
	i.addEventListener("mousemove", get_coords)
	i.addEventListener("mouseout", (e) => {
		e.target.closest('.progect-desc').style.transform = 'skew(0deg, 0deg)'
	})
})

console.log('ok')
	
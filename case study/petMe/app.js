let down = document.querySelectorAll('.survey__item img');

for (let d of down) {
	d.addEventListener('click', up);
}

function up(e) {
	let ele = e.target.style.transform;
	console.log(ele);
	if (e.target.classList.contains('rotate')) {
		e.target.classList.add('anti-rotate');
		e.target.classList.remove('rotate');
	} else {
		e.target.classList.add('rotate');
		e.target.classList.remove('anti-rotate');
	}
}

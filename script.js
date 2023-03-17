//CAROUSEL 

const track = document.querySelector('.product-list');
const slides = Array.from(track.children);
const dotsMenu = document.querySelector('.carousel-tracker');
const indivDots = Array.from(dotsMenu.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to each other
const setPosition = (slide, index) => {
	slide.style.left = slideWidth * (index * 2) + 'px';
}

slides.forEach(setPosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current');
	targetSlide.classList.add('current');
}

//Click indicators = go to selected slide
dotsMenu.addEventListener('click', e => {
	const targetDots = e.target.closest('button');


	if(!targetDots) return;

	const currentSlide = track.querySelector('.current');
	const currentDot = dotsMenu.querySelector('.current');
	const targetIndex = indivDots.findIndex(dot => dot === targetDots)
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDots);
})
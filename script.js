const productStore = {};

// hamburger menu: https://www.youtube.com/watch?v=flItyHiDm7E&t=2s
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

// clearing formspree form
// tutorial: https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
productStore.clearForm = () => {

    const contactForm = document.querySelector('#contact-form');
    window.onbeforeunload = () => {
        contactForm.reset();
    };
};

productStore.clearForm();


// NEED MORE TIME TO WORK THROUGH THIS

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
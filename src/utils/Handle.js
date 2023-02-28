export default function onHandleClick(handle, progressBar, slider) {
	const sliderIndex = parseInt(
		getComputedStyle(slider).getPropertyValue('--slider-index')
	);

	const progressBarItemCount = progressBar.children.length;

	if (handle.classList.contains('left-handle')) {
		if (sliderIndex - 1 < 0) {
			slider.style.setProperty('--slider-index', progressBarItemCount - 1);
			progressBar.children[sliderIndex].classList.remove('active');
			progressBar.children[progressBarItemCount - 1].classList.add('active');
		} else {
			slider.style.setProperty('--slider-index', sliderIndex - 1);
			progressBar.children[sliderIndex].classList.remove('active');
			progressBar.children[sliderIndex - 1].classList.add('active');
		}
	}

	if (handle.classList.contains('right-handle')) {
		if (sliderIndex + 1 >= progressBarItemCount) {
			slider.style.setProperty('--slider-index', 0);
			progressBar.children[sliderIndex].classList.remove('active');
			progressBar.children[0].classList.add('active');
		} else {
			slider.style.setProperty('--slider-index', sliderIndex + 1);
			progressBar.children[sliderIndex].classList.remove('active');
			progressBar.children[sliderIndex + 1].classList.add('active');
		}
	}
}

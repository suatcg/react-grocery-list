export default function calculateProgressBar(progressBar) {
	progressBar.innerHTML = '';
	const slider = progressBar.closest('.row').querySelector('.slider');
	const itemCount = slider.children.length;
	const itemsPerScreen = parseInt(
		getComputedStyle(slider).getPropertyValue('--items-per-screen')
	);
	let sliderIndex = parseInt(
		getComputedStyle(slider).getPropertyValue('--slider-index')
	);
	const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

	if (sliderIndex >= progressBarItemCount) {
		slider.style.setProperty('--slider-index', progressBarItemCount - 1);
		sliderIndex = progressBarItemCount - 1;
	}

	for (let i = 0; i < progressBarItemCount; i++) {
		const barItem = document.createElement('div');
		barItem.classList.add('progress-item');
		// barItem.style.display = 'none';
		if (i === sliderIndex) {
			barItem.classList.add('active');
		}
		progressBar.append(barItem);
	}
}

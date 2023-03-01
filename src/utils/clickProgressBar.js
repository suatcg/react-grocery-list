export default function clickProgress(progressBar, index) {
	const slider = progressBar.closest('.row').querySelector('.slider');
	// 2
	// const sliderIndex = parseInt(
	// 	getComputedStyle(slider).getPropertyValue('--slider-index')
	// );
	getComputedStyle(slider).setPropertyValue('--slider-index', index);
}

const firstButton = document.querySelector("#firstButton");
const secondButton = document.querySelector("#secondButton");

let isProgress = false;

firstButton.addEventListener("click", () => {
	isProgress = !isProgress;
	firstButton.style.cursor = isProgress ? 'progress' : 'pointer';
});

secondButton.addEventListener("click", () => {
	isProgress = !isProgress;
	secondButton.style.cursor = isProgress ? 'progress' : 'pointer';
});
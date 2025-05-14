const firstCheckbox = document.querySelector("#firstCheckbox");
const secondCheckbox = document.querySelector("#secondCheckbox");

firstCheckbox.onclick = uncheckSecond;
secondCheckbox.onclick = uncheckFirst; 

function uncheckSecond() {
	if(firstCheckbox.checked) {
		secondCheckbox.checked = false;
	}
};

function uncheckFirst() {
	if(secondCheckbox.checked) {
		firstCheckbox.checked = false;
	}
};
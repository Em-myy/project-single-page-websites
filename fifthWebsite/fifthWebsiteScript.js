const firstCheckbox = document.querySelector("#firstCheckbox");
const secondCheckbox = document.querySelector("#secondCheckbox");
const thirdCheckbox = document.querySelector("#thirdCheckbox");
const fourthCheckbox = document.querySelector("#fourthCheckbox");

function handleCheckbox1() {
	if(firstCheckbox.checked) {
		secondCheckbox.checked = false;
		thirdCheckbox.checked = false;
		fourthCheckbox.checked = false;
	}
};

function handleCheckbox2() {
	if(secondCheckbox.checked) {
		firstCheckbox.checked = false;
		thirdCheckbox.checked = false;
		fourthCheckbox.checked = false;
	}
};

function handleCheckbox3() {
	if(thirdCheckbox.checked) {
		firstCheckbox.checked = false;
		secondCheckbox.checked = false;
		fourthCheckbox.checked = false;
	}
};

function handleCheckbox4() {
	if(fourthCheckbox.checked) {
		firstCheckbox.checked = false;
		secondCheckbox.checked = false;
		thirdCheckbox.checked = false;
	}
}

























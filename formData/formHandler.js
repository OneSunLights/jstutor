const form = document.querySelector("form");
const info = document.getElementById("displayInfo");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	info.innerText = "Ваше имя: "+form.name.value+"\n Ваш текст: "+form.text.value;
	console.log("Submit");
});
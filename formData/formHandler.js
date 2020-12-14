// Кладём html элементы в переменую
const form = document.querySelector("form");
const info = document.getElementById("displayInfo");
// Привязываем событие на кнопку
form.addEventListener("submit", (event) => {
	// Отменяем стандартные действия браузера
	event.preventDefault();
	// Ложим данные с полей в контейнер на странице
	info.innerText = `Ваше имя: ${form.name.value}\n Ваш текст: ${form.text.value}`;
	console.log("Submit");
});
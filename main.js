//Вывод чисел на страницу от числа "from" до числа "to"
function counter(from, to){
	let number = from;
	//Подобие цикла (для вывода чисел через постоянный вызов функций)
	const id = setInterval(function(){
		//вывод числа на страницу
		document.write(number+"<br>");

		if(number == to){
			//завершить вызов функции
			clearInterval(id);
		}else{
			number++;
		}
	}, 1500);

}
// counter(0,29);




// Функция Call back
const request = (fc) => {
	console.log("Запрос");
	// Асинхронная функция задержки вызова функции
	setTimeout(function(){
		console.log("Ответ");
		// Объект с данными
		data = { id: "928"};
		//Вызов функции с параметром в виде объекта
		fc(data);
	}, 3000);
}
// Стрелочная функция
const engine = (data) => {
	console.log("Engine", data);
}
// request(engine);






// Объект с функциями сложения, умножения и изменения внтутренних чисел объекта
const obj = {
	a:1,
	b:1,
	// Функция сложения
	sum(){
		console.log(`${this.a+this.b} - сумма чисел ${this.a} и ${this.b}`);
	},
	// Функция умножения
	mul(){
		console.log(`${this.a*this.b} - произведение ${this.a} и ${this.b}`);
	},
	// Фукнция изменения внутренних переменных
	write(a,b){
		this.a = a;
		this.b = b;
	}
}
// obj.write(5,8);
// obj.sum();
// obj.mul();
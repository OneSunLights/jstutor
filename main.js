function counter(from, to){
	let number = from;

	const id = setInterval(function(){
		document.write(number+"<br>")

		if(number == to){
			clearInterval(id);
		}else{
			number++;
		}
	}, 100);

}
counter(0,29);
// Функция создания талицы умножения
const tableMulti = (width, height) => {
	document.write("<table>");
	// Первый цикл высота таблицы
	for(let i=1; i <= height; i++){
		document.write("<tr>");
		// Второй цикл ширина таблицы
		for(let j=1; j <= width; j++){
			document.write("<td>");
				document.write(i*j);
			document.write("</td>");
		}

		document.write("</tr>");
	}

	document.write("</table>");	
}
// Вызываем функцию и задаём ширину и высоту таблицы умножения
tableMulti(9,29);
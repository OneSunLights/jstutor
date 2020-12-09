const tableMulti = (width, height) => {
	document.write("<table>");

	for(let i=1; i<= height; i++){
		document.write("<tr>");

		for(let j=1; j<= width; j++){
			document.write("<td>");
				document.write(i*j);
			document.write("</td>");
		}

		document.write("</tr>");
	}

	document.write("</table>");	
}
tableMulti(9,29);
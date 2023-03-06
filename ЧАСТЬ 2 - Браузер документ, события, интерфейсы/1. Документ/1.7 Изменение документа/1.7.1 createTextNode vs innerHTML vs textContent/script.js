// createTextNode vs innerHTML vs textContent
// важность: 5
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))  
// elem.innerHTML = text
// elem.textContent = text

let elem1 = document.getElementById('elem1');
let elem2 = document.getElementById('elem2');
let elem3 = document.getElementById('elem3');

let text = '<div>some info</div>'

elem1.append(document.createTextNode(text))
elem2.innerHTML = text
elem3.textContent = text


// elem.append(document.createTextNode(text))
// elem.textContent = text
//Эти 2 работают одинаково
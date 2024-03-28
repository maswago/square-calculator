let square;
 document.getElementById('mySubmit').onclick = function(){
 let number = document.getElementById('myText').value;
number = Number(number)
 square = Math.pow(number, 2);


document.getElementById('myH3').textContent = square;
}
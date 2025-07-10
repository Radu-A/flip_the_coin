
const main = document.getElementById("main")
const myParagraph = document.createElement("p");
myParagraph.innerText = "Hello World!";
console.log(main);

document.querySelector("#random").addEventListener("click", function (event) {
	event.preventDefault();
	main.appendChild(myParagraph);
})
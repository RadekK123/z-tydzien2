/*
fetch("url", function(data) {
console.log("Sukces");
console.log(data);
}, function(err) {
console.log("Wystąpił błąd!");
console.log(err);
});
*/

function fetch2(url, success, failure){

	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, true);

	xhr.onload = function(){

		if(xhr.readyState == 4 && xhr.status < 400 && xhr.status >= 200){
			success( xhr.status);
		} else {
			failure( new Error("Wystapił blad. : " + xhr.status) );
		}

	};

	xhr.oneerror = function(){
		failure( new Error("Wystapił bl z komunikacja sieciowa") );
	};

	xhr.send();
}

var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click", function(){

	fetch2("https://jsonplaceholder.typicode.com/userss", function(data){
		console.log("Sukces");
		output.textContent(data);
	},
	function(err){
		console.log("Wystapił blad!");
		console.log(err.message);
	});

}, false);

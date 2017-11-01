
function Toggler(selector){
	this._elem = document.querySelector(selector);
}

Toggler.prototype.getElem = function(){
	return this._elem;
};

Toggler.prototype.show = function(){
	this.getElem().style.display = "";
};

Toggler.prototype.hide = function(){
	this.getElem().style.display = "none";
};

var elem = new Toggler("#example");
var button = document.querySelector("#button");
elem.hide();

button.onclick = function(){

	if(elem.getElem().style.display == "none"){
		elem.show();
		button.textContent = button.dataset.show;
	}else {
		elem.hide();
		button.textContent = button.dataset.hide;
	}

};
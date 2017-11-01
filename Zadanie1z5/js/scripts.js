
// String.prototype.repeatt = function(num) {
// 	num = num || 1;
// 	var repeatValue = Array(num + 1).join(this + " ");
// 	return repeatValue;
// };

String.prototype.repeatt = function(num){

	var numValue = [];
	for(var i = 0; i < num; i++){

		if(i == num - 1){
			numValue += this;

		} else {
			numValue += this + " ";
		}
	}
	return numValue;
};

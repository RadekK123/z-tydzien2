function createData(obj){

	var data = obj;

	return {

		set: function(key, value){

			data[key] = value;

		},

		get: function(key){
			return data[key];
		}

	};
}

var data = createData({});

data.set("firstName", "Radek");

console.log(data.get("firstName"));
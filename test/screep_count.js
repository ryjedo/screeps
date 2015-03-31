module.exports = {

	screep_count_with_role: function(role){
		var count = 0;
		var creep_list = Game.creeps;
		
		if(creep_list.length > 0) {
			for(var name in creep_list) {
				var creep = creep_list[name];
				if (creep.role == role) {
					count++
				};
			}
			return count
			console.log("Screep_count_with_role: "role count)
		} else if (creep_list.length == 0) {
			return 0
			console.log("Screep_count_with_role: "role count)
		} else {
			console.log("Screep_count_with_role Error - creep_list.length was "count)
		}
	},

	//example function
	other_method: function(arg){
		return "a_thing"
	}
}
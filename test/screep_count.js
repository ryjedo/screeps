module.exports = {

	with_role: function(role){
		var count = 0;
		var creep_list = Game.creeps;
		
		if(Object.keys(creep_list).length > 0) {
			for(var name in creep_list) {
				var creep = creep_list[name];
				//console.log(creep.memory.role);
				if (creep.memory.role == role) {
					++count;
				}
			}
			console.log("Screep_count_with_role: ", role, count);
			return count;
		} else if (Object.keys(creep_list).length === 0) {
			console.log("Screep_count_with_role: ", role, count);
			return 0;
		} else {
			console.log("Screep_count_with_role Error - creep_list.length was ", count);
		}
	},

	//example function
	total: function(){
		var count = Object.keys(Game.creeps).length;
		console.log("Total screeps:", count);
		return count;
	}
};
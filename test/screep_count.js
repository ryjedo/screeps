module.exports = {

	total: function(){
		var count = Object.keys(Game.creeps).length;
		//console.log("Total screeps:", count);
		return count;
	},

	with_role: function(role){
		var count = 0;
		var creep_list = Game.creeps;
		
		if(total() > 0) {
			for(var name in creep_list) {
				var creep = creep_list[name];
				//console.log(creep.memory.role);
				if (creep.memory.role == role) {
					++count;
				}
			}
			console.log("Screep_count_with_role:", role, count);
			return count;
		} else if (total() === 0) {
			console.log("Screep_count_with_role:", role, count);
			return 0;
		} else {
			console.log("Screep_count_with_role Error - creep_list.length was", count);
		}
	}
};
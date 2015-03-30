module.exports = {

	screep_count_with_role: function(role){
		var count = 0;
		var creep_list = Game.creeps;
		
		if(creep_list.length == 0) {
			return 0;
		}

		for(var name in creep_list) {
			var creep = creep_list[name];

			if (creep.role == role) {
				count++
			};
		}
		return count;
	}
}
module.exports = {

	screep_count_with_role: function(role){
		var count = 0;
		var creep_list = Game.creeps;
		for(var name in creep_list) {
			var creep = creep_list[name];

			if (creep.role == role) {
				count++
			};
		}
		return count;
	}
}
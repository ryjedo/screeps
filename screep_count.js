module.exports = {

	screep_count_with_role: function(role){
		var count = 0;
		for(var name in Game.creeps) {
			var creep = Game.creeps[name];

			if (creep.role == role) {
				count++
			};
		}
		return count;
	}
}
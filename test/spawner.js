var config = require('config');
var screep_count = require('screep_count');
var screep_list = config.active_creeps;

for (var i = screep_list.length - 1; i >= 0; i--) {
	console.log(screep_count.with_role(screep_list[i]));
	if (screep_count.with_role(screep_list[i]) < config.creeps.screep_list[i].qty){
		Game.spawns.Spawn1.createCreep(
			config.creeps.screep_list[i].body,
			config.creeps.screep_list[i].name,
			config.creeps.screep_list[i].role
			);
	}
};
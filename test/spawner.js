var config = require('config');
var screep_count = require('screep_count');
var screep_list = config.active_creeps;

for (var i = screep_list.length - 1; i >= 0; i--) {
	//console.log(screep_count.with_role(screep_list[i]));
	var creep_type = config.creeps[screep_list[i]];
	if (screep_count.with_role(screep_list[i]) < creep_type.qty){
		Game.spawns.Spawn1.createCreep(
			creep_type.body,
			creep_type.name,
			creep_type.role
			);
	}
};
var config = require('config');
var screep_count = require('screep_count');
var screep_list = config.active_creeps;

for (var i = screep_list.length - 1; i >= 0; i--) {
	if (screep_count.with_role(screep_list[i]) < config.creeps.harvester.qty){
		Game.spawns.Spawn1.createCreep(
			config.creeps.harvester.body,
			config.creeps.harvester.name,
			config.creeps.harvester.role
			);
	}
};
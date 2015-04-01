var config = require('config');
var screep_count = require('screep_count');

if (screep_count.with_role("harvester") < config.creeps.harvester.qty){
	Game.spawns.Spawn1.createCreep(
		config.creeps.harvester.body,
		config.creeps.harvester.name,
		config.creeps.harvester.role
		);
}
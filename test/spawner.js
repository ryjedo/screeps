var config = require('config');
var screep_count = require('screep_count');

if (screep_count.with_role("harvester") < config.harv_count){
	Game.spawns.Spawn1.createCreep(config.creeps.harvester);
}
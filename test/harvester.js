module.exports = function (creep) {

	var spawns = [Game.spawns];
	var my_spawn = spawns[0];
	var energy_source = my_spawn.pos.findClosest(Game.sources);

	if(creep.energy < creep.energyCapacity) {
		creep.moveTo(energy_source);
		creep.harvest(energy_source);
	}
	else {
		creep.moveTo(my_spawn);
		creep.transferEnergy(my_spawn);
	}
};
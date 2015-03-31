module.exports = function (creep) {

	var my_spawn = Game.spawns[0];
	var energy_source = Game.MY_SPAWNS[0].pos.findClosest(Game.sources);

	if(creep.energy < creep.energyCapacity) {
		creep.moveTo(energy_source);
		creep.harvest(energy_source);
	}
	else {
		creep.moveTo(my_spawn);
		creep.transferEnergy(my_spawn);
	}
};
var harvester = require('harvester');
var screep_count = require('screep_count')


if(screep_count.screep_count_with_role(harvester) < 2) {
	Game.spawns.Spawn1.createCreep(
		[Game.WORK, Game.CARRY, Game.MOVE],
		'harvester'
	)
}



for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
	
		if(creep.energy == 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
		}
		else {
			var targets = creep.room.find(Game.CONSTRUCTION_SITES);
			if(targets.length) {
				creep.moveTo(targets[0]);
				creep.build(targets[0]);
			}
		}
	}
}

if(creep.memory.role == 'guard') {
	var targets = creep.room.find(Game.HOSTILE_CREEPS);
	if(targets.length) {
		creep.moveTo(targets[0]);
		creep.attack(targets[0]);
	}
}
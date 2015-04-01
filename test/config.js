module.exports = {
	creeps: {
		harvester: {
			body: [Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE, Game.MOVE], 
			name: null, 
			role: {role: 'harvester'},
			qty:  2, 
		},
		builder: {
			body: [Game.MOVE, Game.MOVE, Game.MOVE, Game.WORK, Game.CARRY],
			name: null,
			role: {role: 'builder'},
			qty:  0, 
		},
		guard: {
			body: [Game.MOVE, Game.TOUGH, Game.TOUGH, Game.ATTACK, Game.ATTACK],
			name: null,
			role: {role: 'guard'},
			qty:  0, 
		}
	},
	active_creeps: ["harvester", "builder", "guard"]
};
module.exports = {
	creeps: {
		harvester: {
			body: [Game.WORK, Game.CARRY, Game.MOVE], 
			name: null, 
			role: {role: 'harvester'},
			qty:  1, 
		},
		builder: {
			body: [],
			name: null,
			role: {role: 'builder'},
			qty:  0, 
		},
		guard: {
			body: [],
			name: null,
			role: {role: 'guard'},
			qty:  0, 
		}
	},
	active_creeps: ["harvester"]
};
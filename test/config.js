module.exports = {
	creeps: {
		harvester: {
			body: [Game.WORK, Game.CARRY, Game.MOVE], 
			name: null, 
			role: {role: 'harvester'},
			qty:  3, 
		},
		builder: {
			body: [],
			name: null,
			role: {role: 'builder'},
			qty:  0, 
		},
		fighter: {
			body: [],
			name: null,
			role: {role: 'fighter'},
			qty:  0, 
		}
	}
};
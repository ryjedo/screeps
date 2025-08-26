/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('config');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
  bootstrapper: {
    quantity: 4,
    body: [WORK, CARRY, MOVE, MOVE],
  },
  hauler: {
    quantity: 0,
    body: [CARRY, CARRY, MOVE, MOVE],
  },
  miner: {
    quantity: 0,
    body: [WORK, WORK, WORK, MOVE],
  },
  worker: {
    quantity: 0,
    body: [WORK, CARRY, MOVE, MOVE],
  },
};

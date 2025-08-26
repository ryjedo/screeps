/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep-prototypes');
 * mod.thing == 'a thing'; // true
 */

Creep.prototype.true = function () {
  return true;
};
Creep.prototype.harvestEnergy = function () {
  const source = this.pos.findClosestByPath(FIND_SOURCES);
  if (source) {
    if (this.harvest(source) === ERR_NOT_IN_RANGE) {
      this.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
    }
  }
};
Creep.prototype.storeEnergy = function () {
  // Amount of energy the creep is holding
  const carried = this.store[RESOURCE_ENERGY];

  // Find the closest spawn or extension with enough space for all the creep's energy
  const target = this.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: (structure) =>
      (structure.structureType === STRUCTURE_EXTENSION ||
        structure.structureType === STRUCTURE_SPAWN) &&
      structure.store.getFreeCapacity(RESOURCE_ENERGY) >= carried,
  });

  if (target) {
    if (this.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      this.moveTo(target);
    }
  }
};

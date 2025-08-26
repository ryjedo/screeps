/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep-prototypes');
 * mod.thing == 'a thing'; // true
 */

Creep.prototype.haulEnergy = function () {
  const source = this.pos.findClosestByPath(FIND_SOURCES);
  if (source) {
    if (this.harvest(source) === ERR_NOT_IN_RANGE) {
      this.moveTo(source, { visualizePathStyle: { stroke: "#ffaa00" } });
    }
  }
};

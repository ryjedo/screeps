require("creep_prototypes");

Creep.prototype.boostrapper = function () {
  if (this.isEmpty) {
    this.memory.task = "harvest";
  } else if (this.isFull) {
    if (spawnsNeedEnergy) {
    }
  }

  // Do work
};

/*

    this.harvestEnergy();



Creep.prototype.hauler = function () {
  return true;
};

Creep.prototype.miner = function () {
  return true;
};

Creep.prototype.worker = function () {
  return true;
};
*/

function isEmpty(creep) {
  if (creep.carry.energy === 0) {
    return true;
  }
}
function isEmpty(creep) {
  if (creep.carry.energy === creep.carryCapacity) {
    return true;
  }
}

/*

Examples

// Define the function
function repairDamagedStructures(creep) {
  const target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
    filter: (s) => s.hits < s.hitsMax,
  });
  if (target) {
    if (creep.repair(target) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}

// ... elsewhere in the module
if (creep.memory.role === "repairer") {
  repairDamagedStructures(creep);
}


  const task = this.memory.task;
  switch (task) {
    case "harvest":
      break;
    default:
  }




*/

require("creep_prototypes");

Creep.prototype.boostrapper = function () {
  // Check if the creep has energy.
  if (this.isEmpty) {
    this.memory.task = "harvest";
  } else if (this.isFull) {
    // does a spawner/extension need energy
    const target = spawnNeedsEnergy();
    if (target) {
      if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(target, {
          visualizePathStyle: { stroke: "#ffffff" },
        });
      }
    }

    // check if a structure needs repair
    const damagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => structure.hits < structure.hitsMax,
    });

    if (damagedStructure) {
      if (creep.repair(damagedStructure) === ERR_NOT_IN_RANGE) {
        creep.moveTo(damagedStructure);
      }
    }

    //Build Construction sites
    const constructionSite = creep.pos.findClosestByPath(
      FIND_CONSTRUCTION_SITES
    );
    if (constructionSite) {
      if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
        creep.moveTo(constructionSite, {
          visualizePathStyle: { stroke: "#00ff00" },
        });
      }
    }
    const controller = creep.room.controller;
    if (controller) {
      if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(controller, {
          visualizePathStyle: { stroke: "#ffffff" },
        });
      }
    }
  }
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
function spawnNeedsEnergy() {
  const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) =>
      (structure.structureType === STRUCTURE_EXTENSION ||
        structure.structureType === STRUCTURE_SPAWN) &&
      structure.store.getFreeCapacity(RESOURCE_ENERGY) >= creep.carry.energy,
  });
  return target;
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

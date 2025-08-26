require("creep_prototypes");
require("creep_logic");
const CREEP_CONFIG = require("creep_config");
const profiler = require("screeps_profiler");
//profiler.enable();

module.exports.loop = function () {
  profiler.wrap(function () {
    // Creep Spawning for Configured Roles
    for (const role in CREEP_CONFIG) {
      const roleCfg = CREEP_CONFIG[role];
      const creepsOfRole = _.filter(
        Game.creeps,
        (creep) => creep.memory.role === role
      );
      if (creepsOfRole.length < roleCfg.quantity) {
        const newName = `${role.charAt(0).toUpperCase() + role.slice(1)}${
          Game.time
        }`;
        console.log("Spawning new " + role + ": " + newName);
        Game.spawns["Spawn1"].spawnCreep(roleCfg.body, newName, {
          memory: { role },
        });
      }
    }
    // Clean up memory for dead creeps
    for (const name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log("Clearing non-existing creep memory:", name);
      }
    }

    // Run role-based logic
    for (const name in Game.creeps) {
      const creep = Game.creeps[name];
      if (true) {
        //creep.sayHello();
        //creep.bootstrapper();
        if (creep.carry.energy === 0) {
          creep.memory.harvesting = true;
          creep.memory.depositing = false;
        }
        if (creep.carry.energy === creep.carryCapacity) {
          creep.memory.harvesting = false;
          creep.memory.depositing = true;
        }
        if (creep.memory.harvesting) {
          creep.harvestEnergy();
        } else if (creep.memory.depositing) {
          // First priority: Fill spawns that need energy
          let target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) =>
              (structure.structureType === STRUCTURE_EXTENSION ||
                structure.structureType === STRUCTURE_SPAWN) &&
              structure.store.getFreeCapacity(RESOURCE_ENERGY) >=
                creep.carry.energy,
          });
          if (target) {
            if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
              creep.moveTo(target, {
                visualizePathStyle: { stroke: "#ffffff" },
              });
            }
          } else {
            // Find the closest structure that needs repair
            const damagedStructure = creep.pos.findClosestByRange(
              FIND_STRUCTURES,
              {
                filter: (structure) => structure.hits < structure.hitsMax,
              }
            );

            if (damagedStructure) {
              if (creep.repair(damagedStructure) === ERR_NOT_IN_RANGE) {
                creep.moveTo(damagedStructure);
              }
            } else {
              // Second priority: Build construction sites
              const constructionSite = creep.pos.findClosestByPath(
                FIND_CONSTRUCTION_SITES
              );
              if (constructionSite) {
                if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                  creep.moveTo(constructionSite, {
                    visualizePathStyle: { stroke: "#00ff00" },
                  });
                }
              } else {
                // Third priority: Upgrade controller if no construction sites
                const controller = creep.room.controller;
                if (controller) {
                  if (
                    creep.upgradeController(controller) === ERR_NOT_IN_RANGE
                  ) {
                    creep.moveTo(controller, {
                      visualizePathStyle: { stroke: "#ffffff" },
                    });
                  }
                }
              }
            }
          }
          //} else if (creep.memory.role === 'worker') {

          //} else if (creep.memory.role === 'hauler') {

          //} else if (creep.memory.role === 'miner') {
        } else {
          // State logic for other roles (default harvester behavior)
          if (creep.carry.energy === 0) {
            creep.memory.harvesting = true;
            creep.memory.depositing = false;
          }
          if (creep.carry.energy === creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.memory.depositing = true;
          }
          if (creep.memory.harvesting) {
            const source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (source) {
              if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {
                  visualizePathStyle: { stroke: "#ffaa00" },
                });
              }
            }
          } else if (creep.memory.depositing) {
            let target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
              filter: (structure) =>
                structure.structureType === STRUCTURE_SPAWN &&
                structure.energy < structure.energyCapacity,
            });
            if (target) {
              if (
                creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
              ) {
                creep.moveTo(target, {
                  visualizePathStyle: { stroke: "#ffffff" },
                });
              }
            } else {
              // If no spawn needs energy, upgrade controller
              const controller = creep.room.controller;
              if (controller) {
                if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
                  creep.moveTo(controller, {
                    visualizePathStyle: { stroke: "#ffffff" },
                  });
                }
              }
            }
          }
        }
      }
    }
  });
};

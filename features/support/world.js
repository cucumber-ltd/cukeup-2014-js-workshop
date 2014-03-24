var world = process.env.WORLD;
if (!world) {
  console.warn("Please set $WORLD before running. Defaulting to 'domain'...");
  world = 'domain';
}

module.exports = function () {
  var worldSource = './' + world + '_world';
  this.World = require(worldSource).World;
};

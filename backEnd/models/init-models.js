var DataTypes = require("sequelize").DataTypes;
var _rma_form = require("./rma_form");

function initModels(sequelize) {
  var rma_form = _rma_form(sequelize, DataTypes);


  return {
    rma_form,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

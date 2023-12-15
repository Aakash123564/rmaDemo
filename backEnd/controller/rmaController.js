const { ReE, ReS } = require("../utils");
require("express-validator");
const RmaForm = require("../models/rma_form");
const { Op, Model } = require("sequelize");

// create RMA
exports.create = async function (req, res) {
  const data = req.body;

  try {
    const resp = await RmaForm.create(data);
  } catch (error) {
    const validationErrors = extractValidationErrors(error);

    console.error('Error creating user:', error);

    res.status(400).json({
      success: false,
      error: validationErrors.length > 0 ? validationErrors : 'Error creating user',
    });
  }
  
  
  return ReS(res, {message: "Data added succesfuly"}, 200);
}

// get RMA by id
exports.getRMA = async function (req, res) {
  const data = req.params.id;
  const resp = await RmaForm.findOne({where:{ id: data}});
  console.log(resp)
  if (resp)  return ReS(res,{data: resp}, 200);
  
  return ReE(res, {message: "Could not found Data!"}, 200);
}

function extractValidationErrors(error) {
  return error.errors.map(err => err.message);
}

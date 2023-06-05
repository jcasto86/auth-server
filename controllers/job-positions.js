const { jobPositionsModel } = require("../models");

/**
 * Obtener lista de la BD!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await jobPositionsModel.find({});

  res.send({ data });
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItems = (req, res) => {};

/**
 * Editar item
 * @param {*} req
 * @param {*} res
 */
const updateItems = (req, res) => {};

/**
 * Eliminar item
 * @param {*} req
 * @param {*} res
 */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
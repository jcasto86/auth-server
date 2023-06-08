const { matchedData } = require("express-validator");
const { jobPositionsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de la BD!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await jobPositionsModel.find({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, "GET_ITEMS_ERROR");
  }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const data = await jobPositionsModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "GET_ITEM_ERROR");
  }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await jobPositionsModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "CREATE_ITEMS_ERROR");
  }
};

/**
 * Editar item
 * @param {*} req
 * @param {*} res
 */
const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await jobPositionsModel.findByIdAndUpdate(id, body);

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "UPDATE_ITEMS_ERROR", error.body);
  }
};

/**
 * Eliminar item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const data = await jobPositionsModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "DELETE_ITEM_ERROR");
  }
};

module.exports = { getItems, getItem, createItem, updateItems, deleteItem };

const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener lista de la BD!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await storageModel.find({});
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

const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
};

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
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItems, deleteItem };

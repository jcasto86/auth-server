//ESTE MIDDLEWARE ES DE EJEMPLO ==> SE PUEDE BORRAR

const customHeader = (req, res, next) => {
  // AQUÍ VA EL CÓDIGO QUE QUERAMOS QUE TENGA NUESTRO MIDDLEWARE
  // SE PUEDE LEER EL req.BODY, REQ.HEADERS ETC

  console.log("HEADERS: ", req.headers);
  next();
};

module.exports = customHeader;

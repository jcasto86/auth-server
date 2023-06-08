const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "leifer-01") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API_KEY_ERROR" });
    }
  } catch (e) {
    res.status(403);
    res.send({ error: "CUSTOM_HEADER_WORKS" });
  }
};

module.exports = customHeader;

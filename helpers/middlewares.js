function checkFieldsScan(req, res, next) {
  const { scanDescription, createdAt } = req.body;

  if (scanDescription && createdAt) {
    next();
  } else {
    res.status(400).json({ message: "Parameters are missing" });
  }
}

function checkFieldsSell(req, res, next) {
  if (!Array.isArray(req.body)) {
    res.status(400).json({ message: "Parameter must be an array" });
  } else {
    next();
  }
}

module.exports = {
  checkFieldsScan,
  checkFieldsSell
};

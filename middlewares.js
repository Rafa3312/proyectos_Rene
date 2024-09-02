const logDateTime = (req, res, next) => {
  console.log(`Fecha y hora de acceso: ${new Date().toLocaleString()}`);
  next();
};

const logMessage = (message) => {
  return (req, res, next) => {
    console.log(message);
    next();
  };
};

module.exports = { logDateTime, logMessage };
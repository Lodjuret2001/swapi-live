export const beforeLogger = (req, res, next) => {
  console.log("Request incoming");
  return next();
};

export const afterLogger = (req, res, next) => {
  console.log("Request handled correctly");
};

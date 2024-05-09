import { isAxiosError } from "axios";

const errorHandler = (error, req, res, next) => {
  let statuscode = 500;
  let message = "Something went wrong...";

  if (error instanceof Error) {
    statuscode = 400;
    message = error.message;
  }
  if (isAxiosError(error)) {
    statuscode = error.status || 404;
    message =
      error.response && error.response.data.length < 200
        ? error.response.data
        : error.message;
  }
  res.status(statuscode).send(message);
  return next();
};

export default errorHandler;

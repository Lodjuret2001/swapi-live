import { isAxiosError } from "axios";

const handleError = (error: any): string => {
  let message = "Something went wrong when fetching the Weather Data...";
  if (error instanceof Error) {
    message = error.message;
  }
  if (isAxiosError(error)) {
    message =
      error.response && error.response.data.length < 200
        ? error.response.data
        : error.message;
  }

  return message;
};

export default handleError;
import { loader } from "../../store/actions";
import store from "../../store";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const successHandler = response => {
  store.dispatch(loader({ loading: true }));
  if (isHandlerEnabled(response.config)) {
    store.dispatch(loader({ loading: false }));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject({ ...error });
};

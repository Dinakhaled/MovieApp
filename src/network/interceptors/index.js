import { loader, errorMessage } from "../../store/actions";
import store from "../../store";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    store.dispatch(loader({ loading: true }));
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    store.dispatch(loader({ loading: false }));
    store.dispatch(errorMessage(""));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    store.dispatch(loader({ loading: false }));
    store.dispatch(errorMessage(error.response.data.status_message));
  }
  return Promise.reject({ ...error });
};

import { getBaseMessage } from "../messages";

export const executeApi = async (
  apiFunction,
  request,
  showLoading,
  addMessage,
  getMessageFunc,
  moduleName = null,
  componentName = null,
  preventStopLoading = false
) => {
  try {
    showLoading(true, componentName);
    const response = await (request ? apiFunction(request) : apiFunction());
    const { data, error } = response;
    handleError(
      error,
      addMessage,
      error?.response?.data?.responseStatus
        ? error.response.data.responseStatus
        : data?.responseStatusCode,
      getMessageFunc,
      moduleName
    );

    if (!preventStopLoading) {
      showLoading(false, componentName);
    }

    return data;
  } catch (ex) {
    showLoading(false, componentName);
    console.error("Api Call Exception", ex);
  }
};

const handleError = (
  error,
  addMessage,
  responseStatusCode,
  getMessageFunc,
  moduleName
) => {
  if (error && responseStatusCode && getMessageFunc) {
    addMessage({
      message: getMessageFunc(responseStatusCode, moduleName),
    });
  } else if (error && responseStatusCode) {
    addMessage({
      message: getBaseMessage(responseStatusCode),
    });
  } else if (error && error.message) {
    addMessage({ message: error.message });
  }
};

import { responseStatus } from "../constants";

export const baseMessages = {
  invalidRequestDetails:
    "Sorry. we couldn't find the property information in our database. The error is reported and we are working to resolve the issue as soon as possible.",
  networkError:
    "Sorry. It's not you, something is wrong on our side. We are working to resolve the issue as soon as possible.",
  notFound:
    "Sorry. we couldn't find the property information in our database. The error is reported and we are working to resolve the issue as soon as possible.",
  unAuthorized: "User is not authorized to get this data.",
  requestTimeout: "Request has taken too much time to get data.",
  serviceUnavailable: "Service is not available for requested data.",
};

export const getBaseMessage = (status) => {
  switch (status) {
    case responseStatus.BAD_REQUEST:
      return baseMessages.invalidRequestDetails;

    case responseStatus.UNAUTHORIZED:
      return baseMessages.unAuthorized;

    case responseStatus.NOT_FOUND:
      return baseMessages.notFound;

    case responseStatus.REQUEST_TIMEOUT:
      return baseMessages.requestTimeout;

    case responseStatus.INTERNAL_SERVER_ERROR:
      return baseMessages.networkError;

    case responseStatus.SERVICE_UNAVAILABLE:
      return baseMessages.serviceUnavailable;

    default:
      console.error("message status", status);
      break;
  }
};

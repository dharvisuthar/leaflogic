import { postData } from "./base-api";
import ApiUris from "./apiUris";

export const AuthenticateApi = {
  authenticateUser(request) {
    return postData(ApiUris.authenticate.authenticate, request);
  },
};

const apiUris = {};
const ROOT = `http://143.110.186.132`;

const AUTHENTICATE_ROOT = `${ROOT}:1447/api/v1/Authenticate`;
const authenticate = {
  authenticate: `${AUTHENTICATE_ROOT}/authenticate`,
};

apiUris.authenticate = authenticate;

export default apiUris;

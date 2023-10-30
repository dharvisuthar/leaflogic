import { getData } from "./base-api";
// import ApiUris from "./apiUris";

export const AllApi = {
    getData(url, request) {
        return getData(url, request);
    },
};

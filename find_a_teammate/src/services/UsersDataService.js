import http from "../http-common";

class UsersDataService  {
    getRandom() {
        return http.get("users/random");
    }
    getUser() {
        return http.get(`/users/${id}`);
    }
    createUser() {
        return http.post("/users/create", data);
    }
}
export default new UsersDataService();
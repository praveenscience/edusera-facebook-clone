import Axios from "axios";

export const GetUserData = () => Axios.get("/api/userdata.json");

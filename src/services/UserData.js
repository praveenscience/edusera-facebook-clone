import Axios from "axios";

export const GetUserData = () => Axios.get("/api/userdata.json");
export const GetFeedData = () => Axios.get("/api/feeds.json");

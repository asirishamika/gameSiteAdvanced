import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"93d7088b019e4c1d8fccb4b579c22fc5"
    }
});
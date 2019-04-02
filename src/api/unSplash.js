import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 66b6e073304eb9d3f820aec2c16601569575071aa75fe3ed3d3c81d4d905b513"
  }
});

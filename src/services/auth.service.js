//client/src/services/auth.service.js
import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token on the request headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
    // same as return axios.post("http://localhost:5005/auth/login");
  };

  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
    // same us return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get("/auth/verify");
    // same as return axios.post("http://localhost:5005/auth/verify");
  };

  // Method to fetch users
  fetchUsers = () => {
    return this.api.get("/api/users");
  };
  //--------------FAV------------
  //ADD A STARTUP TO FAVORITES
  addFavoriteStartup = (startupId) => {
    return this.api.post("/api/users/favorites", { startupId });
  };

  // REMOVE A STARTUP FROM FAVORITES 
  removeFavoriteStartup = (startupId) => {
    return this.api.delete("/api/users/favorites", { data: { startupId } });
  };

  // GET FAVORITE STARTUPS
  getFavoriteStartups = () => {
    return this.api.get("/api/users/favorites");
  };

}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;

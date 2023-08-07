import Axios from "axios";
const request = Axios.create({
  baseURL: `https://63aaa3b8fdc006ba6047ae79.mockapi.io`,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      const { data, status, headers } = error.response;

      if (status === 400) {
        console.log("Bad Request:", data);
      } else if (status === 401) {
        console.log("Unauthorized:", data);
      } else if (status === 403) {
        console.log("Forbidden:", data);
      } else if (status === 404) {
        console.log("Not Found:", data);
      } else if (status >= 500) {
        console.log("Server Error:", data);
      }
    } else if (error.request) {
      console.log("No response from server:", error.request);
    } else {
      console.log("Error:", error.message);
    }

    return Promise.reject(error);
  }
);
export default request;

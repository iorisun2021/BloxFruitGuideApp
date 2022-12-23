import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API } from "../config/index";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    loadFromAsyncStorage();
  }, []);

  //axios
  axios.defaults.baseURL = API;
  axios.defaults.headers.common["Authorization"] = `${auth.token}`;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      console.log(error);
      if (error.response.status === 401 || error.response.status === 403) {
        await AsyncStorage.removeItem("@auth");
        setAuth({ user: null, token: "" });
        alert("Session expired, please login.");
      }

      return Promise.reject(error);
    }
  );

  const loadFromAsyncStorage = async () => {
    let data = await AsyncStorage.getItem("@auth");
    const as = JSON.parse(data);

    //console.log("loaded from asyncstorage", data);
    if (as !== null && as.user && as.token) {
      setAuth({ ...auth, user: as.user, token: as.token });
    }
  };

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

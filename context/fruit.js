import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API } from "../config/index";

const FruitContext = createContext();

const FruitProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]);

  return (
    <FruitContext.Provider value={[fruits, setFruits]}>
      {children}
    </FruitContext.Provider>
  );
};

export { FruitContext, FruitProvider };

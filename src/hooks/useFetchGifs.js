import { useState, useEffect } from "react";
import getGifs from "../helpers/ApiService.js";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  // ------------- FORMA #2 -------------
  useEffect(() => {
    getGifs(category)
      .then((images) => {
        setState({
          data: images,
          loading: false,
        });
      });
  }, [category]);

  return state; // { data: [], loading: boolean }
};

export default useFetchGifs;

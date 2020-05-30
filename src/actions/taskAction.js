import axios from "axios";
import { GET_TASKS } from "./types";

export const getTasks = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/todoList/getTasks");
  dispatch({
    type: GET_TASKS,
    payload: res.data,
  });
};

import axios from "axios";
import { GET_TASKS, GET_TASK } from "./types";
import { NotificationManager } from "react-notifications";
import authHeader from "../services/auth-header";
export const getTasks = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/todoList/getTasks", {
    headers: authHeader(),
  });
  dispatch({
    type: GET_TASKS,
    payload: res.data,
  });
};

export const getTask = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/todoList/getTask/${id}`,
      { headers: authHeader() }
    );
    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
    console.log("Inside Get Task");
  } catch (error) {
    history.push("/dashboard");
  }
};

export const addTask = (task, history) => async (dispatch) => {
  try {
    console.log("Calling post method");
    const res = await axios.post(
      "http://localhost:8080/todoList/addTask",
      task,
      { headers: authHeader() }
    );
    NotificationManager.success("Task Added/Upadted Successfully!");
    history.push("/dashboard");
  } catch (error) {
    console.log("Errror while adding Task");
  }
};

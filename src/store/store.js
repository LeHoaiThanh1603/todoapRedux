import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

 const store = configureStore({
    reducer: {
        todoReducer
    }
})
export default store

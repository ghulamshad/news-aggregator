import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import articleReducer from "./articleSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        articles: articleReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

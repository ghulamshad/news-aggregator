import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    token: string | null;
    name: string | null;
}

const initialState: UserState = {
    token: null,
    name: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ token: string; name: string }>) {
            state.token = action.payload.token;
            state.name = action.payload.name;
        },
        logout(state) {
            state.token = null;
            state.name = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

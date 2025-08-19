import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        authenticateUser: (state, action) => {
            return action.payload
        }
    }
});

export default userSlice.reducer;
export const {authenticateUser} = userSlice.actions;
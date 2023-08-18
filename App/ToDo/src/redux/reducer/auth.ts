import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState { //Each slice file should define a type for its initial state value, so that createSlice can correctly infer the type of state in each case reducer.
    userData: null,

}

// Define the initial state using that type
const initialState: AuthState = {
    userData: null,
}

const authSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<any>) => {
            state.userData = action.payload
        },

    },
})

export const { saveUserData } = authSlice.actions

export default authSlice.reducer
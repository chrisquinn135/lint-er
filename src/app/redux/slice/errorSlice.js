import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'nav',
  initialState: {did_run: false},
  reducers: {
    currentState(state) {
        console.log("CLICKY")
      state.did_run = true
    }
  }
})

export const { currentState } = errorSlice.actions
export default errorSlice.reducer
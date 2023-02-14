import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'nav',
  initialState: {current_tab: "Font"},
  reducers: {
    tabSwitch(state, action) {
      state.current_tab = action.payload
    }
  }
})

export const { tabSwitch } = navSlice.actions
export default navSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'nav',
  initialState: {current_tab: "Color", loading: false},
  reducers: {
    tabSwitch(state, action) {
      state.current_tab = action.payload
    },
    loadingStart(state) {
      state.loading = true
    },
    loadingEnd(state) {
      state.loading = false
    }
  }
})

export const { tabSwitch, loadingStart, loadingEnd } = navSlice.actions
export default navSlice.reducer
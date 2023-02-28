import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'nav',
  initialState: {current_tab: "Color", loading: false, setting: false},
  reducers: {
    tabSwitch(state, action) {
      state.current_tab = action.payload
    },
    loadingStart(state) {
      state.loading = true
    },
    loadingEnd(state) {
      state.loading = false
    },
    setting(state) {
      state.setting = !state.setting
    }
  }
})

export const { tabSwitch, loadingStart, loadingEnd, setting } = navSlice.actions
export default navSlice.reducer
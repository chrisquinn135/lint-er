import { createSlice } from '@reduxjs/toolkit'

const fontSlice = createSlice({
  name: 'font',
  initialState: {sf: false, rb: false, lf: false},
  reducers: {
    sf(state, action) {
      state.sf = !state.sf
    },
    rb(state) {
        state.rb = !state.rb
    },
    lf(state) {
        state.lf = !state.lf
    }
  }
})

export const { sf,rb,lf } = fontSlice.actions
export default fontSlice.reducer
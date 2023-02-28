import { createSlice } from '@reduxjs/toolkit'

const fontSlice = createSlice({
  name: 'font',
  initialState: {sf: true, rb: true, lf: true},
  reducers: {
    sf(state, action) {
      state.sf = !state.sf
      parent.postMessage({ pluginMessage: { type: 'font', fontList: [state.lf,state.sf,state.rb]} }, '*');

    },
    rb(state) {
        state.rb = !state.rb
        parent.postMessage({ pluginMessage: { type: 'font', fontList: [state.lf,state.sf,state.rb]} }, '*');

    },
    lf(state) {
        state.lf = !state.lf
        parent.postMessage({ pluginMessage: { type: 'font', fontList: [state.lf,state.sf,state.rb]} }, '*');

    }
  }
})

export const { sf,rb,lf } = fontSlice.actions
export default fontSlice.reducer
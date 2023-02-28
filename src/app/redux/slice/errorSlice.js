import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    did_run: 0,
    colorList: [],
    fontList: [],
    color: 0,
    font: 0,
    focus: "",
    ignoreList: []
  },
  reducers: {
    currentState(state) {
      state.did_run = 1
    },
    ignoreError(state, action) {
      let newErrorList = [];
      // keep track of the ignored items
      if(action.payload.type == 'Color') {
        state.colorList.forEach(element => {
          if (element.id == action.payload.id) {
            state.ignoreList.push(element)
            state.color = state.color - 1;
            newErrorList = state.colorList.filter(el => el.id != element.id);
          }
        });
        state.colorList = newErrorList;
      } else {
        state.fontList.forEach(element => {
          if (element.id == action.payload.id) {
            state.ignoreList.push(element)
            state.font = state.font - 1;
            newErrorList = state.fontList.filter(el => el.id != element.id);
          }
        });
        state.fontList = newErrorList;
      }
      // update list
      state.focus = ""
    },
    updateError(state, action) {
      state.color = action.payload.color.length
      state.font = action.payload.font.length

      state.colorList = action.payload.color
      state.fontList = action.payload.font

      state.did_run = 2,
      state.focus = ""
    },
    focus(state, action) {
      state.focus = action.payload
    },
    ignore(state) {
      state.ignoreList.forEach(el => {
        if (el.type == 'Color') {
          state.color = state.color + 1
          state.colorList.push(el)
        } else {
          state.font = state.font + 1

          state.fontList.push(el)
        }
      })
      state.ignoreList = [];
    }
  }
})

export const { currentState, ignoreError, updateError, focus,ignore } = errorSlice.actions
export default errorSlice.reducer

import {createSlice} from '@reduxjs/toolkit'

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        did_run: 0,
        errorList: [],
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
            console.log("Ignore")
            let newErrorList = []
            // keep track of the ignored items
            state.errorList.forEach(element => {
                if (element.id == action.payload) {
                    state.ignoreList.push(element)
                    if (element.type == "Color") {
                      state.color = state.color - 1;
                    } else {
                      state.font = state.font - 1;
                    }
                    newErrorList = state.errorList.filter(el => el.id != element.id);
                }
            });
            // remove it from the og list
            console.log(newErrorList.length)
            // update list
            state.errorList = newErrorList;
            state.focus = ""
        },
        updateError(state,action) {
          state.color = 0
          state.font = 0
          let newErrorList = []
          // add all errors to new list
          action.payload.forEach(el => {
            newErrorList.push(el)
            
            // update counters for error
            if (el.type == "Color") {
              state.color = state.color + 1;
            } else {
              state.font = state.font + 1;
            }
        })
          state.errorList = newErrorList;
          state.did_run = 2,
          state.focus = ""
        },
        focus(state,action) {
          state.focus = action.payload
        }
    }
})

export const {currentState, ignoreError, updateError,focus} = errorSlice.actions
export default errorSlice.reducer

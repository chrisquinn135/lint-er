import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    did_run: false, 
    errorList:[
      {title:'Wrong Font',message:'This should be 16px',id:0,status:false},
      {title:'Wrong Color',message:'This should be blue',id:1,status:false}
    ],
    ignoreList:[]
  },
  reducers: {
    currentState(state) {
      state.did_run = true
    },
    ignoreError(state,action) {
      console.log("Ignore")
      let newErrorList = []
      // keep track of the ignored items
      state.errorList.forEach(element => {
        if(element.id == action.payload) {
          state.ignoreList.push(element)
          newErrorList = state.errorList.filter(el => el.id != element.id);
        }
      });

      // remove it from the og list
      console.log(newErrorList.length)
      

      // update list
      state.errorList = newErrorList;
  }
  }
})

export const { currentState,ignoreError } = errorSlice.actions
export default errorSlice.reducer
// current navigation that you are currently in
const INITIAL_STATE = {
    current_tab: "font"
 }
 
 const navReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case "switch":
            // if user is clicking into color tab
            if (current_tab === "font" && action.tab === "color") {
                console.log("NAV_SWITCH_REDUCER: To color");
                return {
                    ...state, current_tab: "color"
                };
            } 
            // if user is clicking into font tab
            else if (current_tab === "color" && action.tab === "font"){
                console.log("NAV_SWITCH_REDUCER: To font");
                return {
                    ...state, current_tab: "font"
                };
            } 
            // default
            else {
                return {
                    ...state
                }
            }
         default:
             return state;
     }
 }
 
 export default navReducer
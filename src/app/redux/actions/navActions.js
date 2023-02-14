// controls which tab you currently are on
const tabNavigation = (tab) => {
    console.log("NAV_ACTIONS: " + tab);
    return {
        type: "switch",
        tab: tab
    }    
}

export { tabNavigation }
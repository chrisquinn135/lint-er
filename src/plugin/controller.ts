import colors from "../criteria/color.json"

figma.showUI(__html__);
figma.skipInvisibleInstanceChildren = true;
figma.ui.resize(400, 600);

let nodeError: any = 0;
let errorList: any = [];
// stores skipped nodes
const skipNode: SceneNode[] = [];

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  //const node = figma.currentPage.selection

  // reset error list
  errorList = []
  // run check if run is hit
  if (msg.type === 'run') {
    check();
  }

  // focus error
  if (msg.type === 'focus') {
    console.log("FOCUS")
    focus(msg.id)
  }

  // if (msg.type === 'skip') {
  //   for (let node of figma.currentPage.selection) {
  //     skipNode.push(node);
  //     checkSkip(node);
  //   }
  //   check();
  // }
};

// check color
function colorCheck(object2) {
  // result check
  let result = false;
  // go through every color
  colors.color.forEach((color) => {
    if (object2.r == undefined) {
    } else if (color.r.toFixed(5) == object2.r.toFixed(5) && color.b.toFixed(5) == object2.b.toFixed(5) && color.g.toFixed(5) == object2.g.toFixed(5)) {
      result = true
    }
  })

  // return the result of the for-each
  if (result) {
    return true
  } else {
    return false
  }
}

// traverse through the node
function traverse(node: any) {
  // if no error node, run
    if ('children' in node) {
      // if (node.type !== 'INSTANCE') {
        if(typeof node.fills == "object") {
          let result = false
          node.fills.forEach(fill => {
            if(fill.type != "SOLID") {
              if (!colorCheck(fill.color)) {
                result = true
              }
            }
            
          })
          // if the color is not matching, add it to the array
          if (result) {
            errorList.push({id: node.id, type: "Color", name: node.name, status: false});
          }
        }
        for (const child of node.children) {
          traverse(child);
        }
      // }
    } else {
      // console.log(node)
      // check fills
      if(typeof node.fills == "object") {
        let result = false
        node.fills.forEach(fill => {
          if(fill.type == "SOLID") {
            if (!colorCheck(fill.color)) {
              result = true
            }
          }
          
        })
        // if the color is not matching, add it to the array
        if (result) {
          // console.log(node.fills[0].color)
          errorList.push({id: node.id, type: "Color", name: node.name, status: false});
        }
      }
      
    }
    // if (node.type !== 'TEXT') {
    //     if ('children' in node) {
    //         if (node.type !== 'INSTANCE') {
    //             for (const child of node.children) {
    //                 traverse(child);
    //             }
    //         }
    //     }
    // } else {
    //     console.log(node);
    //     // console.log(sf_pro);
    //     if (node.textStyleId === '' && checkSkip(node)) {
    //         nodeError = node;
    //     }
    // }
}

function check() {
  // What is SceneNode[]
  // const nodes: SceneNode[] = [];
  //let errorNode = traverse(figma.currentPage)
  traverse(figma.currentPage);
  figma.ui.postMessage(errorList)


  // if there is an error
  // if (nodeError != 0) {
  //   let nodeSelection = nodeError;
  //   nodes.push(nodeSelection);
  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);
  //   figma.ui.postMessage(errorList)
  //   nodeError = 0;
  // } else {
  //   figma.notify('NO ERRORS');
  // }
}

// function checkSkip(node: any) {
//   for (let current of skipNode) {
//     if (node === current) {
//       return false;
//     }
//   }
//   return true;
// }

function focus(id) {
  const node = figma.currentPage.findOne(n => n.id === id);
  if (node) {
      const nodes: SceneNode[] = [];
      nodes.push(node)
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
  }
}

figma.on("documentchange", () => {check()})
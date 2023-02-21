import colors from "../criteria/color.json"

figma.showUI(__html__);
figma.ui.resize(400, 600);

// figma.ui.onmessage = (msg) => {

//   if (msg.type === 'create-rectangles') {
//     const nodes = [];

//     for (let i = 0; i < msg.count; i++) {
//       const rect = figma.createRectangle();
//       rect.x = i * 150;
//       rect.fills = [{ type: 'SOLID', color: color.color[0] }];
//       figma.currentPage.appendChild(rect);
//       nodes.push(rect);
//     }

//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);

//     // This is how figma responds back to the ui
//     figma.ui.postMessage({
//       type: 'create-rectangles',
//       message: `Created ${msg.count} Rectangles`,
//     });
//   }

//   figma.closePlugin();
// };

// stores node w/ style error

let nodeError: any = 0;

// stores skipped nodes
const skipNode: SceneNode[] = [];

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  //const node = figma.currentPage.selection

  // run check if run is hit
  if (msg.type === 'run') {
    check();
  }

  if (msg.type === 'skip') {
    for (let node of figma.currentPage.selection) {
      skipNode.push(node);
      checkSkip(node);
    }
    check();
  }
};

// check color
function colorCheck(object2) {
  // result check
  let result = false;
  // go through every color
  colors.color.forEach((color) => {
    if (color.r.toFixed(5) == object2.r.toFixed(5) && color.b.toFixed(5) == object2.b.toFixed(5) && color.g.toFixed(5) == object2.g.toFixed(5)) {
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

function traverse(node: any) {
  // if no error node, run
  if (nodeError == 0) {
    if ('children' in node) {
      if (node.type !== 'INSTANCE') {
        for (const child of node.children) {
          traverse(child);
        }
      }
    } else {
      console.log(node)

      // check fills
      node.fills.forEach(fill => {
        console.log("CHECK")
        if (!colorCheck(fill.color)) {
          nodeError = node
        } else {
          console.log(" NO ERRORS !")
        }
      })
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
}

function check() {
  // What is SceneNode[]
  const nodes: SceneNode[] = [];

  //let errorNode = traverse(figma.currentPage)
  traverse(figma.currentPage);

  // if there is an error
  if (nodeError != 0) {
    let nodeSelection = nodeError;
    nodes.push(nodeSelection);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    nodeError = 0;
  } else {
    figma.notify('NO ERRORS');
  }
}

function checkSkip(node: any) {
  for (let current of skipNode) {
    if (node === current) {
      return false;
    }
  }
  return true;
}
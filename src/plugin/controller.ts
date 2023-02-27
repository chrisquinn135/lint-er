import colors from "../criteria/color.json"
import fonts from '../criteria/font.json'

// global enables
figma.showUI(__html__);
figma.skipInvisibleInstanceChildren = true;
figma.ui.resize(400, 600);

// global variables
let errorList: any = [];
let idList: any = []
let START: boolean = false;

// universal function: on page edit, run universal checker
figma.on("documentchange", () => {
  if (START) {
    for (const node of figma.currentPage.selection) {
      if (idList.includes(node.id)) {
        check()
      }
    }
  }
}
)

figma.ui.onmessage = (msg) => {
  // run message: check for errors throughout page
  if (msg.type === 'run') {
    START = true;
    check();
  }

  // focus message: focus on a specific error on the page
  if (msg.type === 'focus') {
    focus(msg.id)
  }
};

//  *********************************************
//  ********** Error Checker Feature ************
//  *********************************************

// traverse through the nodes & call error-checking functions
function traverse(node: any) {
  if ('children' in node) {
    error_check(node)
    for (const child of node.children) {
      traverse(child);
    }
  } else {
    error_check(node)
  }
}

// universal run function for checking for errors
function check() {
  errorList = []
  idList = []
  traverse(figma.currentPage);
  figma.ui.postMessage(errorList)
}

// helper function that combines the color & font checkers into one
function error_check(node: any) {
  if (typeof node.fills == "object") {
    is_wrong_color(node)
  }
  if (node.type == "TEXT") {
    is_wrong_font(node)
  }
  if(node.strokes) {
    is_wrong_stroke(node)
  }
}

// color error -> error list function
function is_wrong_color(node: any) {

  // result variable
  let result = false

  node.fills.forEach(fill => {
    if (fill.type == "SOLID") {
      if (!color_helper(fill.color)) {
        result = true
      }
    }
  })

  // if the color is not matching, add it to the error-list
  if (result) {
    errorList.push({ id: node.id, type: "Color", desc: "Fill color", name: node.name, status: false });
    idList.push(node.id)
  }
}

// color error -> error list function
function is_wrong_stroke(node: any) {

  // result variable
  let result = false

  node.strokes.forEach(stroke => {
    if (stroke.type == "SOLID") {
      if (!color_helper(stroke.color)) {
        result = true
      }
    }
  })

  // if the color is not matching, add it to the error-list
  if (result) {
    errorList.push({ id: node.id, type: "Color",desc: "Stroke color", name: node.name, status: false });
    idList.push(node.id)
  }
}

// check color
function color_helper(object2) {

  // result variable
  let result = false;

  // go through every color in colors.json
  colors.color.forEach((color) => {
    if (object2.r == undefined) {
    } else if (color.r.toFixed(5) == object2.r.toFixed(5) && color.b.toFixed(5) == object2.b.toFixed(5) && color.g.toFixed(5) == object2.g.toFixed(5)) {
      result = true
    }
  })

  // return the result variable
  return result;
}

// font error -> error list function
function is_wrong_font(node: any) {

  // result variable
  let result = false

  // go through fonts.json
  fonts.font.forEach(element => {
    if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
      result = true
    }
  });

  // if the font is not matching, add it to the error-list
  if (!result) {
    errorList.push({ id: node.id, type: "Font", desc: "Font", name: node.name, status: false });
    idList.push(node.id)
  }
}

//  *************************************
//  ********** Focus Feature ************
//  *************************************

// focus function
function focus(id) {
  const node = figma.currentPage.findOne(n => n.id === id);
  if (node) {
    const nodes: SceneNode[] = [];
    nodes.push(node)
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
}
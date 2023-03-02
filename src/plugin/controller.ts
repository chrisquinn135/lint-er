import colors from "../criteria/color.json"
import sf_font_json from '../criteria/fontSF.json'
import rb_font_json from '../criteria/fontRB.json'
import lf_font_json from '../criteria/fontLF.json'


// global enables
figma.showUI(__html__);
figma.skipInvisibleInstanceChildren = true;
figma.ui.resize(400, 600);

// global variables
let colorErrorList: any = [];
let fontErrorList: any = [];

let allFonts: any = [sf_font_json, rb_font_json, lf_font_json];
let SFRB: any = [sf_font_json, rb_font_json]
let RBLF: any = [rb_font_json, lf_font_json]
let SFLF: any = [sf_font_json, lf_font_json]
let mixed: boolean = true;
let visible: boolean = true;

let colorID: any = []
let fontID: any = []

let START: boolean = false;

let fontsList: any = [true, false, false]

// universal function: on page edit, run universal checker
figma.on("documentchange", () => {
  if (START) {
    for (const node of figma.currentPage.selection) {

      if (colorID.includes(node.id)) {
        let index = colorID.indexOf(node.id); // find the index of 'orange'
        if (index !== -1) {
          colorID.splice(index, 1); // remove the element at the found index
        }
        colorErrorList = colorErrorList.filter((element) => {
          return element.id !== node.id;
        });
        is_wrong_color(node)
      }
      if (fontID.includes(node.id)) {
        let index = fontID.indexOf(node.id); // find the index of 'orange'
        if (index !== -1) {
          fontID.splice(index, 1); // remove the element at the found index
        }
        fontErrorList = fontErrorList.filter((element) => {
          return element.id !== node.id;
        });
        is_wrong_font(node)
      }

      figma.ui.postMessage({ color: colorErrorList, font: fontErrorList })
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

  // font checkers
  if (msg.type === 'font') {
    fontsList = msg.fontList
    mixed = msg.fontList[3]
    if (START) {
      fontOnlyCheck()
    }
  }

  if (msg.type === 'hidden') {
    visible = msg.hidden
    if (START) {
      check();
    }
  }
};

//  *********************************************
//  ********** Error Checker Feature ************
//  *********************************************

// universal run function for checking for errors
function check() {
  colorErrorList = []
  fontErrorList = []
  colorID = []
  fontID = []
  traverse(figma.currentPage, 'all');
  figma.ui.postMessage({ color: colorErrorList, font: fontErrorList })
}

// universal run function for checking for errors
function fontOnlyCheck() {
  fontErrorList = []
  fontID = []
  traverse(figma.currentPage, 'font');
  figma.ui.postMessage({ color: colorErrorList, font: fontErrorList })
}

// traverse through the nodes & call error-checking functions
function traverse(node: any, type: string) {
  console.log(node)
  if ('children' in node) {
    error_check(node, type)
    for (const child of node.children) {
      traverse(child, type);
    }
  } else {
    error_check(node, type)
  }
}

// helper function that combines the color & font checkers into one
function error_check(node: any, type: string) {
  if(!visible || node.visible) {
    if (typeof node.fills == "object" && type == 'all') {
      is_wrong_color(node)
    }
    if (node.type == "TEXT") {
      is_wrong_font(node)
    }
    if (node.strokes && type == 'all') {
      is_wrong_stroke(node)
    }
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
    colorErrorList.push({ id: node.id, type: "Color", desc: "Fill color", name: node.name, status: false });
    colorID.push(node.id)
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
    colorErrorList.push({ id: node.id, type: "Color", desc: "Stroke color", name: node.name, status: false });
    colorID.push(node.id)
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
  if (node.fontName === figma.mixed || node.fontSize === figma.mixed) {
    console.log(mixed)
    if (!mixed) {
      fontErrorList.push({ id: node.id, type: "Font", desc: "Mixed font", name: node.name, status: false });
      fontID.push(node.id)
    }
  } else {
    // result variable
    let result = false
    if (fontsList[0] && fontsList[1] && fontsList[2]) {
      allFonts.forEach(fonts => {
        fonts.font.forEach(element => {
          if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
            result = true
          }
        });
      })
    } else if (fontsList[0] && fontsList[1] && !fontsList[2]) {
      SFLF.forEach(fonts => {
        fonts.font.forEach(element => {
          if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
            result = true
          }
        });
      })
    } else if (fontsList[0] && !fontsList[1] && !fontsList[2]) {
      lf_font_json.font.forEach(element => {
        if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
          result = true
        }
      });
    } else if (fontsList[0] && !fontsList[1] && fontsList[2]) {
      RBLF.forEach(fonts => {
        fonts.font.forEach(element => {
          if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
            result = true
          }
        });
      })
    } else if (!fontsList[0] && !fontsList[1] && fontsList[2]) {
      rb_font_json.font.forEach(element => {
        if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
          result = true
        }
      });
    } else if (!fontsList[0] && fontsList[1] && fontsList[2]) {
      SFRB.forEach(fonts => {
        fonts.font.forEach(element => {
          if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
            result = true
          }
        });
      })
    } else if (!fontsList[0] && fontsList[1] && !fontsList[2]) {
      sf_font_json.font.forEach(element => {
        if (node.fontName.family == "Font Awesome 6 Pro" || (element.family == node.fontName.family && element.style == node.fontName.style && element.size == node.fontSize)) {
          result = true
        }
      });
    } else if (!fontsList[0] && !fontsList[1] && !fontsList[2]) {
      if (node.fontName.family == "Font Awesome 6 Pro") {
        result = true
      }
    }

    // if the font is not matching, add it to the error-list
    if (!result) {
      let desc = node.fontName.family + ', ' + node.fontName.style + ", " + node.fontSize
      fontErrorList.push({ id: node.id, type: "Font", desc: desc, name: node.name, status: false });
      fontID.push(node.id)
    }
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
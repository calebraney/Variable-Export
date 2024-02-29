const clientFirstVariables = [
  /////////////////
  // Adaptive Sizes
  { type: "size", name: "size/1", value: 1, unit: "rem" },
  { type: "size", name: "size/1.25", value: 1.25, unit: "rem" },
  { type: "size", name: "size/1.5", value: 1.5, unit: "rem" },
  { type: "size", name: "size/1.75", value: 1.75, unit: "rem" },
  { type: "size", name: "size/2", value: 2, unit: "rem" },
  { type: "size", name: "size/2.5", value: 2.5, unit: "rem" },
  { type: "size", name: "size/3", value: 3, unit: "rem" },
  { type: "size", name: "size/3.5", value: 3.5, unit: "rem" },
  { type: "size", name: "size/4", value: 4, unit: "rem" },
  { type: "size", name: "size/4.5", value: 4.5, unit: "rem" },
  { type: "size", name: "size/5", value: 5, unit: "rem" },
  { type: "size", name: "size/5.5", value: 5.5, unit: "rem" },
  { type: "size", name: "size/6", value: 6, unit: "rem" },
  { type: "size", name: "size/6.5", value: 6.5, unit: "rem" },
  { type: "size", name: "size/7", value: 7, unit: "rem" },
  { type: "size", name: "size/7.5", value: 7.5, unit: "rem" },
  { type: "size", name: "size/8", value: 8, unit: "rem" },
  { type: "size", name: "size/8.5", value: 8.5, unit: "rem" },
  { type: "size", name: "size/8.5", value: 8.5, unit: "rem" },
  { type: "size", name: "size/9", value: 9, unit: "rem" },
  { type: "size", name: "size/9.5", value: 9.5, unit: "rem" },
  { type: "size", name: "size/10", value: 10, unit: "rem" },
  { type: "size", name: "size/11", value: 11, unit: "rem" },
  { type: "size", name: "size/12", value: 12, unit: "rem" },
  { type: "size", name: "size/13", value: 13, unit: "rem" },
  { type: "size", name: "size/14", value: 14, unit: "rem" },
  { type: "size", name: "size/15", value: 15, unit: "rem" },
  { type: "size", name: "size/16", value: 16, unit: "rem" },
  // Page Structure
  { type: "size", name: "padding/horizontal", value: 5, unit: "vw" },
  { type: "size", name: "padding/section large", value: 9, unit: "rem" },
  { type: "size", name: "padding/section main", value: 6, unit: "rem" },
  { type: "size", name: "padding/section small", value: 3, unit: "rem" },
  { type: "size", name: "max width/large", value: 96, unit: "rem" },
  { type: "size", name: "max width/main", value: 80, unit: "rem" },
  { type: "size", name: "max width/small", value: 64, unit: "rem" },
  // Border Width
  { type: "size", name: "border width/main", value: 1, unit: "px" },
  // Border Radius
  { type: "size", name: "border radius/xsmall", value: 0.5, unit: "rem" },
  { type: "size", name: "border radius/small", value: 1, unit: "rem" },
  { type: "size", name: "border radius/medium", value: 2, unit: "rem" },
  { type: "size", name: "border radius/large", value: 4, unit: "rem" },
  { type: "size", name: "border radius/rounded", value: 100, unit: "vw" },
  { type: "size", name: "border radius/image", value: 4, unit: "rem" },
  // Typography Desktop
  { type: "size", name: "font size/h1", value: 5, unit: "rem" },
  { type: "size", name: "font size/h2", value: 4, unit: "rem" },
  { type: "size", name: "font size/h3", value: 3.5, unit: "rem" },
  { type: "size", name: "font size/h4", value: 3, unit: "rem" },
  { type: "size", name: "font size/h5", value: 2, unit: "rem" },
  { type: "size", name: "font size/h6", value: 1.5, unit: "rem" },
  // Typography Tablet
  { type: "size", name: "font size/md/h1", value: 5, unit: "rem" },
  { type: "size", name: "font size/md/h2", value: 4, unit: "rem" },
  { type: "size", name: "font size/md/h3", value: 3.5, unit: "rem" },
  { type: "size", name: "font size/md/h4", value: 3, unit: "rem" },
  { type: "size", name: "font size/md/h5", value: 2, unit: "rem" },
  { type: "size", name: "font size/md/h6", value: 1.5, unit: "rem" },
  // Typography Mobile Landcape
  { type: "size", name: "font size/sm/h1", value: 5, unit: "rem" },
  { type: "size", name: "font size/sm/h2", value: 4, unit: "rem" },
  { type: "size", name: "font size/sm/h3", value: 3.5, unit: "rem" },
  { type: "size", name: "font size/sm/h4", value: 3, unit: "rem" },
  { type: "size", name: "font size/sm/h5", value: 2, unit: "rem" },
  { type: "size", name: "font size/sm/h6", value: 1.5, unit: "rem" },
  // Typography Mobile Portrait
  { type: "size", name: "font size/xs/h1", value: 5, unit: "rem" },
  { type: "size", name: "font size/xs/h2", value: 4, unit: "rem" },
  { type: "size", name: "font size/xs/h3", value: 3.5, unit: "rem" },
  { type: "size", name: "font size/xs/h4", value: 3, unit: "rem" },
  { type: "size", name: "font size/xs/h5", value: 2, unit: "rem" },
  { type: "size", name: "font size/xs/h6", value: 1.5, unit: "rem" },
  /////////////////
  /* Base Colors */
  { type: "color", name: "swatch/dark 1", value: "#ffffff" },
  { type: "color", name: "swatch/dark 2", value: "#ffffff" },
  { type: "color", name: "swatch/dark 3", value: "#ffffff" },
  { type: "color", name: "swatch/light 1", value: "#ffffff" },
  { type: "color", name: "swatch/light 2", value: "#ffffff" },
  { type: "color", name: "swatch/light 3", value: "#ffffff" },
  /* Semantic Colors */
  { type: "color", name: "color/background primary", value: "#ffffff" },
  { type: "color", name: "color/background secondary", value: "#ffffff" },
  { type: "color", name: "color/background accent", value: "#ffffff" },
  { type: "color", name: "color/background alternate", value: "#ffffff" },
  { type: "color", name: "color/text primary", value: "#ffffff" },
  { type: "color", name: "color/text secondary", value: "#ffffff" },
  { type: "color", name: "color/text accent", value: "#ffffff" },
  { type: "color", name: "color/text alternate", value: "#ffffff" },
  { type: "color", name: "color/border primary", value: "#ffffff" },
  { type: "color", name: "color/border secondary", value: "#ffffff" },
  { type: "color", name: "color/border accent", value: "#ffffff" },
  { type: "color", name: "color/border alternate", value: "#ffffff" },
  /////////////////
  /* Fonts */
  { type: "font-family", name: "font family/primary", value: "system" },
  { type: "font-family", name: "font family/secondary", value: "Arial" },
];

const lumosVariables = [
  /////////////////
  // Adaptive Sizes
  { type: "size", name: "size/1", value: 1, unit: "rem" },
  { type: "size", name: "size/1.25", value: 1.25, unit: "rem" },
  { type: "size", name: "size/1.5", value: 1.5, unit: "rem" },
  { type: "size", name: "size/1.75", value: 1.75, unit: "rem" },
  { type: "size", name: "size/2", value: 2, unit: "rem" },
  { type: "size", name: "size/2.5", value: 2.5, unit: "rem" },
  { type: "size", name: "size/3", value: 3, unit: "rem" },
  { type: "size", name: "size/3.5", value: 3.5, unit: "rem" },
  { type: "size", name: "size/4", value: 4, unit: "rem" },
  { type: "size", name: "size/4.5", value: 4.5, unit: "rem" },
  { type: "size", name: "size/5", value: 5, unit: "rem" },
  { type: "size", name: "size/5.5", value: 5.5, unit: "rem" },
  { type: "size", name: "size/6", value: 6, unit: "rem" },
  { type: "size", name: "size/6.5", value: 6.5, unit: "rem" },
  { type: "size", name: "size/7", value: 7, unit: "rem" },
  { type: "size", name: "size/7.5", value: 7.5, unit: "rem" },
  { type: "size", name: "size/8", value: 8, unit: "rem" },
  { type: "size", name: "size/8.5", value: 8.5, unit: "rem" },
  { type: "size", name: "size/8.5", value: 8.5, unit: "rem" },
  { type: "size", name: "size/9", value: 9, unit: "rem" },
  { type: "size", name: "size/9.5", value: 9.5, unit: "rem" },
  { type: "size", name: "size/10", value: 10, unit: "rem" },
  { type: "size", name: "size/11", value: 11, unit: "rem" },
  { type: "size", name: "size/12", value: 12, unit: "rem" },
  { type: "size", name: "size/13", value: 13, unit: "rem" },
  { type: "size", name: "size/14", value: 14, unit: "rem" },
  { type: "size", name: "size/15", value: 15, unit: "rem" },
  { type: "size", name: "size/16", value: 16, unit: "rem" },
  // Page Structure
  { type: "size", name: "padding/horizontal", value: 5, unit: "vw" },
  { type: "size", name: "padding/section large", value: 9, unit: "rem" },
  { type: "size", name: "padding/section main", value: 6, unit: "rem" },
  { type: "size", name: "padding/section small", value: 3, unit: "rem" },
  { type: "size", name: "max width/large", value: 96, unit: "rem" },
  { type: "size", name: "max width/main", value: 80, unit: "rem" },
  { type: "size", name: "max width/small", value: 64, unit: "rem" },
  // Border Width
  { type: "size", name: "border width/main", value: 1, unit: "px" },
  // Border Radius
  { type: "size", name: "border radius/xsmall", value: 0.5, unit: "rem" },
  { type: "size", name: "border radius/small", value: 1, unit: "rem" },
  { type: "size", name: "border radius/medium", value: 2, unit: "rem" },
  { type: "size", name: "border radius/large", value: 4, unit: "rem" },
  { type: "size", name: "border radius/rounded", value: 100, unit: "vw" },
  { type: "size", name: "border radius/image", value: 4, unit: "rem" },
  // Grid Gap
  { type: "size", name: "grid gap/main", value: "1rem" },
  // Font Weights
  { type: "size", name: "font-weight/100", value: "0px" },
  { type: "size", name: "font-weight/200", value: "0px" },
  { type: "size", name: "font-weight/300", value: "0px" },
  { type: "size", name: "font-weight/400", value: "0px" },
  { type: "size", name: "font-weight/500", value: "0px" },
  { type: "size", name: "font-weight/600", value: "0px" },
  { type: "size", name: "font-weight/700", value: "0px" },
  { type: "size", name: "font-weight/800", value: "0px" },
  { type: "size", name: "font-weight/900", value: "0px" },
  // Font Families
  { type: "font-family", name: "font-family/primary-family", value: "system" },

  // Typography Desktop
  { type: "size", name: "..h1/font-size", value: "5rem" },
  { type: "font-family", name: "..h1/font-family", value: "$inherit" },

  /////////////////
  /* Base Colors */
  { type: "color", name: "swatch/dark 1", value: "#ffffff" },
  { type: "color", name: "swatch/dark 2", value: "#ffffff" },
  { type: "color", name: "swatch/dark 3", value: "#ffffff" },
  { type: "color", name: "swatch/light 1", value: "#ffffff" },
  { type: "color", name: "swatch/light 2", value: "#ffffff" },
  { type: "color", name: "swatch/light 3", value: "#ffffff" },
  { type: "color", name: "swatch/brand 1", value: "#ffffff" },
  /* Semantic Colors */
  { type: "color", name: "theme/background 1", value: "#ffffff" },
  { type: "color", name: "theme/background 2", value: "#ffffff" },
  { type: "color", name: "theme/background 3", value: "#ffffff" },
  { type: "color", name: "theme/background 4", value: "#ffffff" },
  { type: "color", name: "theme/text 1", value: "#ffffff" },
  { type: "color", name: "theme/text 2", value: "#ffffff" },
  { type: "color", name: "theme/text 3", value: "#ffffff" },
  { type: "color", name: "theme/text 4", value: "#ffffff" },
  { type: "color", name: "theme/border 1", value: "#ffffff" },
  { type: "color", name: "theme/border 2", value: "#ffffff" },
  { type: "color", name: "theme/border 3", value: "#ffffff" },
  { type: "color", name: "theme/border 4", value: "#ffffff" },
];

const testVariables = [
  // Adaptive Sizes
  { type: "size", name: "test/size", value: 1, unit: "rem" },
  { type: "color", name: "test/color", value: "#ffffff" },
  { type: "font-family", name: "test/font", value: "Arial" },
  { type: "size", name: "test/reference", value: "test/size", alias: true },
];

//////////////////////////////////
// Variables App

// Global Variables
let succesfulVariables = 0;
let failedVaribles = 0;

//repeatable function to create a variable
const createVariable = async function (variable) {
  //Get the collection of the current Webflow Variables
  const collection = await webflow.getDefaultVariableCollection();
  // Fetch all variables within the default collection
  const currentVariables = await collection?.getAllVariables();
  let createdVariable;
  // get the type, name and value of the variable
  let { type, name, value, unit } = variable;
  // if alias is true find the referenced variable and update the value
  if (variable?.alias === true) {
    // Get Variable by Name
    const aliasVariable = await collection?.getVariableByName(value);
    console.log(aliasVariable);
    if (!aliasVariable) {
      await webflow.notify({
        type: "Error",
        message: "The alias for this variable was not found",
      });
      //add to failed variables count
      failedVaribles++;
      return;
    } else {
      value = aliasVariable;
    }
  }
  if (type === "size") {
    // Create Size Variable with a Size Value
    createdVariable = await collection?.createSizeVariable(name, {
      unit: unit,
      value: value,
    });
  }
  if (type === "color") {
    // Create Color Variable with a HEX Codre
    createdVariable = await collection?.createColorVariable(name, value);
  }
  if (type === "font-family") {
    // Create Font Family Variable with a Font Family Name
    createdVariable = await collection?.createFontFamilyVariable(name, value);
  }
  console.log(createdVariable);
  if (!createdVariable) {
    //add to failed variables count
    failedVaribles++;
  } else {
    succesfulVariables++;
  }
};

// function to import variables
const importVariables = async function (variables) {
  //handle error if no variables are set
  if (variables.length === 0) {
    await webflow.notify({
      type: "Error",
      message: "There are no variables set to import",
    });
    return;
  }
  variables.forEach(async (variable) => {
    createVariable(variable);
  });
  //after all variables have been created notify the amount of variables created
  await webflow.notify({
    type: "Success",
    message: `${succesfulVariables} were created, and ${failedVaribles} failed`,
  });
  succesfulVariables = 0;
  failedVaribles = 0;
};

//button event listeners for app
function addButtonListeners() {
  document.getElementById("client-first").onclick = () => {
    importVariables(testVariables);
  };

  document.getElementById("lumos").onclick = () => {
    importVariables(lumosVariables);
  };
}

//handle app form submit
document.getElementById("extension-form").onsubmit = async (event) => {
  event.preventDefault();

  // Get the current selected Element
  const el = await webflow.getSelectedElement();
  //button listeners
  addButtonListeners();
};

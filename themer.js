console.log("Hello from the themer ✨🌈");

var colors = {
  color_1: "#00b0b2",
  color_2: "#160f19",
  color_3: "#282828",
  color_4: "#333",
  color_5: "#38ad38",
  color_6: "#404040",
  color_7: "#418cab",
  color_8: "#444122",
  color_9: "#484848",
  color_10: "#4e4e4e",
  color_11: "#55ff84",
  color_12: "#565656",
  color_13: "#666",
  color_14: "#6eca98",
  color_15: "#7059e0",
  color_16: "#777",
  color_17: "#79e6d9",
  color_18: "#7b7b7b",
  color_19: "#8383ff",
  color_20: "#a158ab",
  color_21: "#a4a4e4",
  color_22: "#b39519",
  color_23: "#b98e01",
  color_24: "#bd3874",
  color_25: "#ce5c48",
  color_26: "#dadada",
  color_27: "#f3929f",
  color_28: "#fddd88",
  color_29: "#ff5d5d",
}

var darkImages = {
  "Ã": `url("https://glitch.com/edit/images/background-dark/icons/Ã—.svg")`,
  "ask_for_help_face": `url("https://glitch.com/edit/images/background-dark/icons/ask-for-help-face.svg")`,
  "ask_for_help_hand": `url("https://glitch.com/edit/images/background-dark/icons/ask-for-help-hand.svg")`,
  "ask_for_help": `url("https://glitch.com/edit/images/background-dark/icons/ask-for-help.svg")`,
  "branches_diagram": `url("https://glitch.com/edit/images/background-dark/icons/branches-diagram.svg")`,
  "collapse": `url("https://glitch.com/edit/images/background-dark/icons/collapse.svg")`,
  "down_arrow": `url("https://glitch.com/edit/images/background-dark/icons/down-arrow.svg")`,
  "eye": `url("https://glitch.com/edit/images/background-dark/icons/eye.svg")`,
  "heart_empty": `url("https://glitch.com/edit/images/background-dark/icons/heart-empty.svg")`,
  "heart_filled": `url("https://glitch.com/edit/images/background-dark/icons/heart-filled.svg")`,
  "left_arrow": `url("https://glitch.com/edit/images/background-dark/icons/left-arrow.svg")`,
  "options": `url("https://glitch.com/edit/images/background-dark/icons/options.svg")`,
  "private": `url("https://glitch.com/edit/images/background-dark/icons/private.svg")`,
  "remix": `url("https://glitch.com/edit/images/background-dark/icons/remix.svg")`,
  "search": `url("https://glitch.com/edit/images/background-dark/icons/search.svg")`,
  "show_app": `url("https://glitch.com/edit/images/background-dark/icons/show-app.svg")`,
  "show_branches": `url("https://glitch.com/edit/images/background-dark/icons/show-branches.svg")`,
  "up_arrow": `url("https://glitch.com/edit/images/background-dark/icons/up-arrow.svg")`,
  "asking_for_help": `url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/asking-for-help.svg")`,
  "assets_active": `url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/assets-active.svg")`,
  "assets": `url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/assets.svg")`,
  "secrets_active": `url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/secrets-active.svg")`,
  "secrets": `url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/secrets.svg")`,
  "fold_widget": `url("https://glitch.com/edit/images/editor/fold-widget-dark.svg")`,
  "fold_widget_folded": `url("https://glitch.com/edit/images/editor/fold-widget-folded-dark.svg")`,
  "github_logo": `url("https://glitch.com/edit/images/emojis/github-logo-dark.svg")`,
  "project_loader_background": `url("https://glitch.com/edit/images/illustrations/project-loader-background-dark.svg")`,
}

var lightImages = {
  "Ã": `url("https://glitch.com/edit/images/background-light/icons/Ã—.svg")`,
  "ask_for_help_face": `url("https://glitch.com/edit/images/background-light/icons/ask-for-help-face.svg")`,
  "ask_for_help_hand": `url("https://glitch.com/edit/images/background-light/icons/ask-for-help-hand.svg")`,
  "ask_for_help": `url("https://glitch.com/edit/images/background-light/icons/ask-for-help.svg")`,
  "branches_diagram": `url("https://glitch.com/edit/images/background-light/icons/branches-diagram.svg")`,
  "collapse": `url("https://glitch.com/edit/images/background-light/icons/collapse.svg")`,
  "down_arrow": `url("https://glitch.com/edit/images/background-light/icons/down-arrow.svg")`,
  "eye": `url("https://glitch.com/edit/images/background-light/icons/eye.svg")`,
  "heart_empty": `url("https://glitch.com/edit/images/background-light/icons/heart-empty.svg")`,
  "heart_filled": `url("https://glitch.com/edit/images/background-light/icons/heart-filled.svg")`,
  "left_arrow": `url("https://glitch.com/edit/images/background-light/icons/left-arrow.svg")`,
  "options": `url("https://glitch.com/edit/images/background-light/icons/options.svg")`,
  "private": `url("https://glitch.com/edit/images/background-light/icons/private.svg")`,
  "remix": `url("https://glitch.com/edit/images/background-light/icons/remix.svg")`,
  "search": `url("https://glitch.com/edit/images/background-light/icons/search.svg")`,
  "show_app": `url("https://glitch.com/edit/images/background-light/icons/show-app.svg")`,
  "show_branches": `url("https://glitch.com/edit/images/background-light/icons/show-branches.svg")`,
  "up_arrow": `url("https://glitch.com/edit/images/background-light/icons/up-arrow.svg")`,
  "asking_for_help": `url("https://glitch.com/edit/images/background-light/sidebar-file-icons/asking-for-help.svg")`,
  "assets_active": `url("https://glitch.com/edit/images/background-light/sidebar-file-icons/assets-active.svg")`,
  "assets": `url("https://glitch.com/edit/images/background-light/sidebar-file-icons/assets.svg")`,
  "secrets_active": `url("https://glitch.com/edit/images/background-light/sidebar-file-icons/secrets-active.svg")`,
  "secrets": `url("https://glitch.com/edit/images/background-light/sidebar-file-icons/secrets.svg")`,
  "fold_widget": `url("https://glitch.com/edit/images/editor/fold-widget-light.svg")`,
  "fold_widget_folded": `url("https://glitch.com/edit/images/editor/fold-widget-folded-light.svg")`,
  "github_logo": `url("https://glitch.com/edit/images/emojis/github-logo-light.svg")`,
  "project_loader_background": `url("https://glitch.com/edit/images/illustrations/project-loader-background-light.svg")`,
}

var cssVars = `
  --color_1: ${localStorage.getItem("color_1") || colors.color_1};
  --color_2: ${localStorage.getItem("color_2") || colors.color_2};
  --color_3: ${localStorage.getItem("color_3") || colors.color_3};
  --color_4: ${localStorage.getItem("color_4") || colors.color_4};
  --color_5: ${localStorage.getItem("color_5") || colors.color_5};
  --color_6: ${localStorage.getItem("color_6") || colors.color_6};
  --color_7: ${localStorage.getItem("color_7") || colors.color_7};
  --color_8: ${localStorage.getItem("color_8") || colors.color_8};
  --color_9: ${localStorage.getItem("color_9") || colors.color_9};
  --color_10: ${localStorage.getItem("color_10") || colors.color_10};
  --color_11: ${localStorage.getItem("color_11") || colors.color_11};
  --color_12: ${localStorage.getItem("color_12") || colors.color_12};
  --color_13: ${localStorage.getItem("color_13") || colors.color_13};
  --color_14: ${localStorage.getItem("color_14") || colors.color_14};
  --color_15: ${localStorage.getItem("color_15") || colors.color_15};
  --color_16: ${localStorage.getItem("color_16") || colors.color_16};
  --color_17: ${localStorage.getItem("color_17") || colors.color_17};
  --color_18: ${localStorage.getItem("color_18") || colors.color_18};
  --color_19: ${localStorage.getItem("color_19") || colors.color_19};
  --color_20: ${localStorage.getItem("color_20") || colors.color_20};
  --color_21: ${localStorage.getItem("color_21") || colors.color_21};
  --color_22: ${localStorage.getItem("color_22") || colors.color_22};
  --color_23: ${localStorage.getItem("color_23") || colors.color_23};
  --color_24: ${localStorage.getItem("color_24") || colors.color_24};
  --color_25: ${localStorage.getItem("color_25") || colors.color_25};
  --color_26: ${localStorage.getItem("color_26") || colors.color_26};
  --color_27: ${localStorage.getItem("color_27") || colors.color_27};
  --color_28: ${localStorage.getItem("color_28") || colors.color_28};
  --color_29: ${localStorage.getItem("color_29") || colors.color_29};
  --Ã: url("https://glitch.com/edit/images/background-dark/icons/Ã—.svg");
  --ask_for_help_face: url("https://glitch.com/edit/images/background-dark/icons/ask-for-help-face.svg");
  --ask_for_help_hand: url("https://glitch.com/edit/images/background-dark/icons/ask-for-help-hand.svg");
  --ask_for_help: url("https://glitch.com/edit/images/background-dark/icons/ask-for-help.svg");
  --branches_diagram: url("https://glitch.com/edit/images/background-dark/icons/branches-diagram.svg");
  --collapse: url("https://glitch.com/edit/images/background-dark/icons/collapse.svg");
  --down_arrow: url("https://glitch.com/edit/images/background-dark/icons/down-arrow.svg");
  --eye: url("https://glitch.com/edit/images/background-dark/icons/eye.svg");
  --heart_empty: url("https://glitch.com/edit/images/background-dark/icons/heart-empty.svg");
  --heart_filled: url("https://glitch.com/edit/images/background-dark/icons/heart-filled.svg");
  --left_arrow: url("https://glitch.com/edit/images/background-dark/icons/left-arrow.svg");
  --options: url("https://glitch.com/edit/images/background-dark/icons/options.svg");
  --private: url("https://glitch.com/edit/images/background-dark/icons/private.svg");
  --remix: url("https://glitch.com/edit/images/background-dark/icons/remix.svg");
  --search: url("https://glitch.com/edit/images/background-dark/icons/search.svg");
  --show_app: url("https://glitch.com/edit/images/background-dark/icons/show-app.svg");
  --show_branches: url("https://glitch.com/edit/images/background-dark/icons/show-branches.svg");
  --up_arrow: url("https://glitch.com/edit/images/background-dark/icons/up-arrow.svg");
  --asking_for_help: url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/asking-for-help.svg");
  --assets_active: url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/assets-active.svg");
  --assets: url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/assets.svg");
  --secrets_active: url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/secrets-active.svg");
  --secrets: url("https://glitch.com/edit/images/background-dark/sidebar-file-icons/secrets.svg");
  --fold_widget: url("https://glitch.com/edit/images/editor/fold-widget-dark.svg");
  --fold_widget_folded: url("https://glitch.com/edit/images/editor/fold-widget-folded-dark.svg");
  --github_logo: url("https://glitch.com/edit/images/emojis/github-logo-dark.svg");
  --project_loader_background: url("https://glitch.com/edit/images/illustrations/project-loader-background-dark.svg");
  --code_font: Source Code Pro, Menlo, Consolas, Monaco, "Lucida Console", Monospace;
`

document.documentElement.style = cssVars;

var themeCssElem = document.getElementById("theme");
var customThemeUrl = chrome.extension.getURL("cosmos-with-vars.css");
themeCssElem.href = customThemeUrl;


var userOptionsPop = document.getElementsByClassName("user-options-pop")[0];
var themeSection = userOptionsPop.getElementsByClassName("pop-over-actions")[0];
var colorSection = document.createElement("section");
colorSection.className = "pop-over-actions";
colorSection.style.paddingBottom = "14px;"
insertAfter(colorSection, themeSection);

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for (const [colorKey, colorValue] of Object.entries(colors)) {
  var colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.className = colorKey;
  colorInput.name = colorKey;
  colorInput.value = localStorage.getItem(colorKey) || colorValue;
  colorSection.appendChild(colorInput);
  setUpHandleColorChange(colorInput);
}

function setUpHandleColorChange(colorInput) {
  colorInput.addEventListener("change", (event) => {
    var colorValue = event.target.value;
    var colorKey = event.target.name;
    document.documentElement.style.setProperty(`--${colorKey}`, colorValue);
    localStorage.setItem(colorKey, colorValue);
  });
}

var lightDarkToggleButton = document.createElement("button");
lightDarkToggleButton.dataset.currentTheme = "dark";
lightDarkToggleButton.innerHTML = `<span class="emoji sunny">`;
lightDarkToggleButton.addEventListener("click", (event) => {
  if (lightDarkToggleButton.dataset.currentTheme == "dark") {
    console.log("changing to light theme");
    lightDarkToggleButton.dataset.currentTheme = "light";
    lightDarkToggleButton.innerHTML = `<span class="emoji crescent_moon">`;
    setImagesForLightTheme();
  } else {
    console.log("changing to dark theme");
    lightDarkToggleButton.dataset.currentTheme = "dark";
    lightDarkToggleButton.innerHTML = `<span class="emoji sunny">`;
    setImagesForDarkTheme();
  }
});

colorSection.appendChild(lightDarkToggleButton);


function setImagesForDarkTheme() {
  for (const [imageKey, imageValue] of Object.entries(darkImages)) {
    document.documentElement.style.setProperty(`--${imageKey}`, imageValue);
  }
}

function setImagesForLightTheme() {
  for (const [imageKey, imageValue] of Object.entries(lightImages)) {
    document.documentElement.style.setProperty(`--${imageKey}`, imageValue);
  }
}

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst main_1 = __webpack_require__(/*! ./src/main */ \"./src/main.ts\");\nconst shop_1 = __webpack_require__(/*! ./src/shop */ \"./src/shop.ts\");\nconst experience_1 = __webpack_require__(/*! ./src/experience */ \"./src/experience.ts\");\nlet currentView = null;\nconst root = document.getElementById(\"root\");\nconst renderMainView = () => {\n    const mainView = (0, main_1.mains)(() => renderMainView());\n    renderView(mainView);\n};\nconst renderShopView = () => {\n    const shopView = (0, shop_1.shop)(() => renderShopView());\n    renderView(shopView);\n};\nconst renderExpView = () => {\n    const ExpView = (0, experience_1.Exp)(() => renderExpView());\n    renderView(ExpView);\n};\nconst renderView = (newView) => {\n    if (root && currentView) {\n        root.replaceChild(newView, currentView);\n        currentView = newView;\n    }\n    else if (root) {\n        root.appendChild(newView);\n        currentView = newView;\n    }\n};\nconst divButtons = document.createElement(\"div\");\ndivButtons.classList.add(\"divButtons\");\nconst expierenceButton = document.createElement(\"button\");\nexpierenceButton.classList.add(\"Expierence\");\nroot === null || root === void 0 ? void 0 : root.appendChild(expierenceButton);\nexpierenceButton.innerHTML = \"EXPIERENCE\";\nexpierenceButton.onclick = renderExpView;\nconst mainButton = document.createElement(\"button\");\nmainButton.classList.add(\"Main\");\nmainButton.innerHTML = \"HOME\";\nmainButton.onclick = renderMainView;\nconst shopButton = document.createElement(\"button\");\nshopButton.classList.add(\"Exp\");\nshopButton.innerHTML = \"ABOUT\";\nshopButton.onclick = renderShopView;\ndivButtons.appendChild(mainButton);\ndivButtons.appendChild(shopButton);\ndivButtons.appendChild(expierenceButton);\nroot === null || root === void 0 ? void 0 : root.appendChild(divButtons);\nrenderMainView();\n\n\n//# sourceURL=webpack://singlepage/./index.ts?");

/***/ }),

/***/ "./src/experience.ts":
/*!***************************!*\
  !*** ./src/experience.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Exp = void 0;\nconst Exp = (changePage) => {\n    const shopView = document.createElement(\"div\");\n    const workWith = document.createElement(\"div\");\n    const technologic = document.createElement(\"img\");\n    technologic.alt = \"techno\";\n    technologic.style.height = \"550px\";\n    technologic.style.width = \"850px\";\n    technologic.style.backgroundColor = \"transparent\";\n    technologic.src = \"/grafiki/csss.png\";\n    workWith.innerHTML = \"TECHNOLOGIES I WORK WITH:\";\n    workWith.style.fontSize = \"50px\";\n    shopView.style.paddingLeft = \"300px\";\n    shopView.style.paddingTop = \"20px\";\n    shopView.appendChild(workWith);\n    shopView.appendChild(technologic);\n    return shopView;\n};\nexports.Exp = Exp;\n\n\n//# sourceURL=webpack://singlepage/./src/experience.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mains = void 0;\nconst mains = (changePage) => {\n    const graphic = document.createElement(\"div\");\n    const mainView = document.createElement(\"div\");\n    const icons = document.createElement(\"div\");\n    const siema = document.createElement(\"div\");\n    const containDouble = document.createElement(\"div\");\n    const welcome = document.createElement(\"div\");\n    welcome.classList.add(\"slider\");\n    containDouble.classList.add(\"contain-double\");\n    siema.classList.add(\"siema\");\n    icons.classList.add(\"icons\");\n    graphic.classList.add(\"button-container\");\n    mainView.classList.add(\"whole\");\n    const photo1 = document.createElement(\"img\");\n    photo1.classList.add(\"photo1\");\n    photo1.src = \"/grafiki/blackwhite.jpg\";\n    const photo2 = document.createElement(\"img\");\n    photo2.classList.add(\"photo2\");\n    photo2.src = \"/grafiki/nozki.jpg\";\n    const photo3 = document.createElement(\"img\");\n    photo3.classList.add(\"photo3\");\n    photo3.src = \"/grafiki/szczegoliki.jpg\";\n    const photo4 = document.createElement(\"img\");\n    photo4.classList.add(\"photo4\");\n    photo4.src = \"/grafiki/taniec.jpg\";\n    const photo5 = document.createElement(\"img\");\n    photo5.classList.add(\"photo5\");\n    photo5.src = \"/grafiki/usmiech.jpg\";\n    const photo6 = document.createElement(\"img\");\n    photo6.classList.add(\"photo6\");\n    photo6.src = \"/grafiki/zimneognie.jpg\";\n    containDouble.appendChild(photo1);\n    containDouble.appendChild(photo2);\n    containDouble.appendChild(photo3);\n    containDouble.appendChild(photo4);\n    containDouble.appendChild(photo5);\n    containDouble.appendChild(photo6);\n    const ButtonFirstGraph = document.createElement(\"a\");\n    ButtonFirstGraph.classList.add(\"icons-git\");\n    const firstGraph = document.createElement(\"img\");\n    ButtonFirstGraph.href = \"https://github.com/AltoDomino?tab=repositories\";\n    ButtonFirstGraph.style.borderRadius = \"100px\";\n    firstGraph.alt = \"git\";\n    firstGraph.style.width = \"150px\";\n    firstGraph.style.height = \"150px\";\n    firstGraph.style.backgroundColor = \"transparent\";\n    firstGraph.src = \"/grafiki/git.png\";\n    graphic === null || graphic === void 0 ? void 0 : graphic.appendChild(firstGraph);\n    ButtonFirstGraph.appendChild(firstGraph);\n    const ButtonSecGraph = document.createElement(\"a\");\n    ButtonSecGraph.classList.add(\"icons-fb\");\n    const secGraph = document.createElement(\"img\");\n    ButtonSecGraph.href = \"https://pl-pl.facebook.com/dominik.duraj.31/\";\n    ButtonSecGraph.style.borderRadius = \"100px\";\n    secGraph.alt = \"fb\";\n    secGraph.style.width = \"150px\";\n    secGraph.style.height = \"150px\";\n    secGraph.style.backgroundColor = \"transparent\";\n    secGraph.src = \"/grafiki/fb.png\";\n    graphic === null || graphic === void 0 ? void 0 : graphic.appendChild(secGraph);\n    ButtonSecGraph.appendChild(secGraph);\n    const ButtonthirdGraph = document.createElement(\"a\");\n    ButtonthirdGraph.href = \"mailto:d.dduraj@gmail.com\";\n    ButtonthirdGraph.classList.add(\"icons-person\");\n    const thirdGraph = document.createElement(\"img\");\n    ButtonthirdGraph.style.borderRadius = \"100px\";\n    thirdGraph.alt = \"person\";\n    thirdGraph.style.width = \"150px\";\n    thirdGraph.style.height = \"150px\";\n    thirdGraph.style.backgroundColor = \"transparent\";\n    thirdGraph.src = \"/grafiki/person.png\";\n    graphic === null || graphic === void 0 ? void 0 : graphic.appendChild(thirdGraph);\n    ButtonthirdGraph.appendChild(thirdGraph);\n    mainView.appendChild(icons);\n    icons.appendChild(graphic);\n    graphic.appendChild(ButtonFirstGraph);\n    graphic.appendChild(ButtonSecGraph);\n    graphic.appendChild(ButtonthirdGraph);\n    welcome.appendChild(siema); /// pusty div\n    welcome.appendChild(containDouble);\n    mainView.appendChild(welcome);\n    mainView.appendChild(containDouble);\n    const description = [\"('hello!')\", \"('I'm Dominik')\", \"('I'm Photographer')\", \"('I'm Junior Developer')\"];\n    let display = [];\n    let i = 0;\n    let j = 0;\n    let isDelete = false;\n    const Typingtext = () => {\n        welcome.innerHTML = display.join('');\n        if (i < description.length) {\n            if (!isDelete && j <= description[i].length) {\n                display.push(description[i][j]);\n                j++;\n            }\n            else if (isDelete && j > 0) {\n                display.pop();\n                j--;\n            }\n            if ((isDelete && j === 0) || j === description[i].length) {\n                isDelete = !isDelete;\n                if (!isDelete) {\n                    i++;\n                    display = [];\n                    j = 0;\n                }\n            }\n        }\n        else {\n            i = 0;\n            j = 0;\n            isDelete = false;\n        }\n        setTimeout(Typingtext, 150);\n    };\n    Typingtext();\n    return mainView;\n};\nexports.mains = mains;\n\n\n//# sourceURL=webpack://singlepage/./src/main.ts?");

/***/ }),

/***/ "./src/shop.ts":
/*!*********************!*\
  !*** ./src/shop.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.shop = void 0;\nconst shop = (changePage) => {\n    const shopView = document.createElement(\"div\");\n    const me = document.createElement(\"div\");\n    const photos = document.createElement(\"div\");\n    const ja = document.createElement(\"img\");\n    const ja2 = document.createElement(\"img\");\n    photos.appendChild(ja);\n    photos.appendChild(ja2);\n    ja2.src = \"/grafiki/ja22.png\";\n    ja2.alt = \"ja2\";\n    ja.src = \"/grafiki/6939.png\";\n    ja.alt = \"ja\";\n    ja.style.height = \"360px\";\n    ja.style.width = \"240px\";\n    ja.style.backgroundColor = \"transparent\";\n    ja2.style.height = \"360px\";\n    ja2.style.width = \"240px\";\n    ja2.style.backgroundColor = \"transparent\";\n    ja2.style.display = \"none\";\n    ja.addEventListener(\"mousemove\", () => {\n        photos.appendChild(me);\n        photos.style.display = \"flex\";\n        photos.style.justifyContent = \"space-between\";\n        photos.style.gap = \"50px\";\n        me.style.paddingTop = \"100px\";\n        ja2.style.display = \"inline-block\";\n        ja.style.display = \"none\";\n    });\n    ja2.addEventListener(\"mouseleave\", () => {\n        photos.removeChild(me);\n        ja.style.display = \"inline-block\";\n        ja2.style.display = \"none\";\n    });\n    shopView.classList.add(\"diskrajb\");\n    const shopview2 = document.createElement(\"div\");\n    const shopview3 = document.createElement(\"div\");\n    const shopview4 = document.createElement(\"div\");\n    shopView.innerHTML = \"Photography is a fantastic hobby\";\n    shopview2.innerHTML = \" but I have always been eager to delve deeper into the technology that surrounds us.\";\n    shopview3.innerHTML = \"Considering that technology is an inseparable part of our lives, \";\n    shopview4.innerHTML = \"I have decided to embark on the path of programming.\";\n    me.innerHTML = \"THAT'S ME!\";\n    shopView.appendChild(shopview2);\n    shopView.appendChild(shopview3);\n    shopView.appendChild(shopview4);\n    shopView.appendChild(photos);\n    return shopView;\n};\nexports.shop = shop;\n\n\n//# sourceURL=webpack://singlepage/./src/shop.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
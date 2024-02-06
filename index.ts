import { mains } from "./src/main";
import { shop } from "./src/shop";
import { Exp } from "./src/experience";

let currentView: HTMLElement | null = null;

const root = document.getElementById("root");

const renderMainView = () => {
  const mainView = mains(() => renderMainView());
  renderView(mainView);
};

const renderShopView = () => {
  const shopView = shop(() => renderShopView());
  renderView(shopView);
};

const renderExpView = () => {
  const ExpView = Exp(() => renderExpView());
  renderView(ExpView);
};

const renderView = (newView: HTMLElement) => {
  if (root && currentView) {
    root.replaceChild(newView, currentView);
    currentView = newView;
  } else if (root) {
    root.appendChild(newView);
    currentView = newView;
  }
};

const divButtons = document.createElement("div");
divButtons.classList.add("divButtons");

const expierenceButton = document.createElement("button");
expierenceButton.classList.add("Expierence");
root?.appendChild(expierenceButton);
expierenceButton.innerHTML ="EXPIERENCE"
expierenceButton.onclick = renderExpView;

const mainButton = document.createElement("button");
mainButton.classList.add("Main");
mainButton.innerHTML = "HOME";
mainButton.onclick = renderMainView;

const shopButton = document.createElement("button");
shopButton.classList.add("Exp");
shopButton.innerHTML = "ABOUT";
shopButton.onclick = renderShopView;

divButtons.appendChild(mainButton);
divButtons.appendChild(shopButton);
divButtons.appendChild(expierenceButton);

root?.appendChild(divButtons);

renderMainView();

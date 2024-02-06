export const shop = (changePage : (newPage: "main") => void) => {
    const shopView = document.createElement("div")
    shopView.classList.add("diskrajb")
    const shopview2 = document.createElement("div")
    const shopview3 = document.createElement("div")
    const shopview4 = document.createElement("div")
    shopView.innerHTML= "Photography is a fantastic hobby"
    shopview2.innerHTML=" but I have always been eager to delve deeper into the technology that surrounds us."
    shopview3.innerHTML="Considering that technology is an inseparable part of our lives, "
    shopview4.innerHTML="I have decided to embark on the path of programming."
    shopView.appendChild(shopview2)
    shopView.appendChild(shopview3)
    shopView.appendChild(shopview4)
    return shopView
}
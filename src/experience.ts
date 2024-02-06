export const Exp = (changePage : (newPage: "Exp") => void) => {
    const shopView = document.createElement("div")
    const workWith = document.createElement("div")
    const technologic = document.createElement("img")
    technologic.alt = "techno"
    technologic.style.height= "550px"
    technologic.style.width= "850px"
    technologic.style.backgroundColor="transparent"
    technologic.src ="/grafiki/csss.png"
    workWith.innerHTML = "TECHNOLOGIES I WORK WITH:"
    workWith.style.fontSize="50px"
    shopView.style.paddingLeft="300px"
    shopView.style.paddingTop="20px"
    shopView.appendChild(workWith)
    shopView.appendChild(technologic)

    return shopView
}
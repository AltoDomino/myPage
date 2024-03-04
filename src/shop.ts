export const shop = (changePage : (newPage: "main") => void) => {
    const shopView = document.createElement("div")
    const me = document.createElement("div")
    const photos = document.createElement("div")
    const ja = document.createElement("img")
    const ja2 = document.createElement("img")
    
    photos.appendChild(ja)
    photos.appendChild(ja2)

    ja2.src="/grafiki/ja22.png"
    ja2.alt="ja2"


    ja.src="/grafiki/6939.png" 
    ja.alt="ja"
    
    ja.style.height="360px"
    ja.style.width="240px"
    ja.style.backgroundColor="transparent"

    ja2.style.height="360px"
    ja2.style.width="240px"
    ja2.style.backgroundColor="transparent"
    ja2.style.display="none"
    
    ja.addEventListener("mousemove", () => {
        photos.appendChild(me)
        photos.style.display ="flex"
        photos.style.justifyContent="space-between"
        photos.style.gap="50px"
        me.style.paddingTop="100px"
        ja2.style.display = "inline-block";
        ja.style.display = "none"; 
    
    });
    ja2.addEventListener("mouseleave", () => {
        photos.removeChild(me)
        ja.style.display = "inline-block"; 
        ja2.style.display = "none";
    });


    shopView.classList.add("diskrajb")
    const shopview2 = document.createElement("div")
    const shopview3 = document.createElement("div")
    const shopview4 = document.createElement("div")
    shopView.innerHTML= "Photography is a fantastic hobby"
    shopview2.innerHTML=" but I have always been eager to delve deeper into the technology that surrounds us."
    shopview3.innerHTML="Considering that technology is an inseparable part of our lives, "
    shopview4.innerHTML="I have decided to embark on the path of programming."
    me.innerHTML="THAT'S ME!"
    shopView.appendChild(shopview2) 
    shopView.appendChild(shopview3)
    shopView.appendChild(shopview4)
    shopView.appendChild(photos)
    return shopView
}
export const mains = (changePage :(newPage: "shop")  => void) => {
  
  const graphic = document.createElement("div")
  const mainView = document.createElement("div")
  const icons = document.createElement("div")
  const siema = document.createElement("div")
  const containDouble = document.createElement("div")
  const welcome = document.createElement("div")

  welcome.classList.add("slider")
  containDouble.classList.add("contain-double")
  siema.classList.add("siema")
  icons.classList.add("icons")
  graphic.classList.add("button-container")
  mainView.classList.add("whole")

  const photo1 = document.createElement("img")
  photo1.classList.add("photo1")
  photo1.src="/grafiki/blackwhite.jpg"
  const photo2 = document.createElement("img")
  photo2.classList.add("photo2")
  photo2.src="/grafiki/nozki.jpg"
  const photo3 = document.createElement("img")
  photo3.classList.add("photo3")
  photo3.src="/grafiki/szczegoliki.jpg"
  const photo4 = document.createElement("img")
  photo4.classList.add("photo4")
  photo4.src="/grafiki/taniec.jpg"
  const photo5 = document.createElement("img")
  photo5.classList.add("photo5")
  photo5.src="/grafiki/usmiech.jpg"
  const photo6 = document.createElement("img")
  photo6.classList.add("photo6")
  photo6.src="/grafiki/zimneognie.jpg"

  containDouble.appendChild(photo1)
  containDouble.appendChild(photo2)
  containDouble.appendChild(photo3)
  containDouble.appendChild(photo4)
  containDouble.appendChild(photo5)
  containDouble.appendChild(photo6)

  const ButtonFirstGraph = document.createElement("a")
  ButtonFirstGraph.classList.add("icons-git")
  const firstGraph = document.createElement("img") 
  ButtonFirstGraph.href="https://github.com/AltoDomino?tab=repositories"
  ButtonFirstGraph.style.borderRadius= "100px"
  firstGraph.alt= "git"
  firstGraph.style.width ="150px";
  firstGraph.style.height ="150px";
  firstGraph.style.backgroundColor = "transparent"
  firstGraph.src="/grafiki/git.png"
  graphic?.appendChild(firstGraph)
  ButtonFirstGraph.appendChild(firstGraph)

  const ButtonSecGraph = document.createElement("a")
  ButtonSecGraph.classList.add("icons-fb")
  const secGraph = document.createElement("img")
  ButtonSecGraph.href="https://pl-pl.facebook.com/dominik.duraj.31/"
  ButtonSecGraph.style.borderRadius= "100px"
  secGraph.alt= "fb"
  secGraph.style.width ="150px";
  secGraph.style.height ="150px";
  secGraph.style.backgroundColor = "transparent"
  secGraph.src="/grafiki/fb.png"
  graphic?.appendChild(secGraph)
  ButtonSecGraph.appendChild(secGraph)

  const ButtonthirdGraph = document.createElement("a")
  ButtonthirdGraph.href="mailto:d.dduraj@gmail.com"
  ButtonthirdGraph.classList.add("icons-person")
  const thirdGraph = document.createElement("img")
  ButtonthirdGraph.style.borderRadius= "100px"
  thirdGraph.alt= "person"
  thirdGraph.style.width ="150px";
  thirdGraph.style.height ="150px";
  thirdGraph.style.backgroundColor = "transparent"
  thirdGraph.src="/grafiki/person.png"
  graphic?.appendChild(thirdGraph)
  ButtonthirdGraph.appendChild(thirdGraph)

 mainView.appendChild(icons)
 icons.appendChild(graphic)
 graphic.appendChild(ButtonFirstGraph)
 graphic.appendChild(ButtonSecGraph)
 graphic.appendChild(ButtonthirdGraph)
 welcome.appendChild(siema) /// pusty div
 welcome.appendChild(containDouble)
 mainView.appendChild(welcome)
 mainView.appendChild(containDouble)
  
 const description = ["('hello!')", "('I'm Dominik')", "('I'm Photographer')", "('I'm Junior Developer')"];
 let display: string[] = [];
 let i = 0;
 let j = 0;
 let isDelete = false;
 
 const Typingtext = () => {
     welcome.innerHTML = display.join('');
     if (i < description.length) {
         if (!isDelete && j <= description[i].length) {
             display.push(description[i][j]);
             j++;
         } else if (isDelete && j > 0) {
             display.pop();
             j--;
         }
         if ((isDelete && j === 0) || j === description[i].length) {
             isDelete = !isDelete;
             if (!isDelete) {
                 i++;
                 display = [];
                 j = 0;
             }
         }
     } else {
         i = 0;
         j = 0;
         isDelete = false;
     }
 
     setTimeout(Typingtext, 150);
 };
 
 Typingtext();
 
  
    return mainView

  }
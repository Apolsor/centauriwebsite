// JS 

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  menu = document.querySelector("menu"),
  moodToggle = document.querySelector(".dark_light"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");
 
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.toggle("dark")
}


// js this code to toggle dark and light mood 
moodToggle.addEventListener("click", () => {
  moodToggle.classList.toggle("active")
  body.classList.toggle("dark");

  // js code  to user selcted mode even page refresh or file reopen 
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "ligth-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");

  }
})

// js code to goggle sidebar

sidebarOpen.addEventListener("click", () => {

  nav.classList.add("active");
});


body.addEventListener("click", e => {
  let clikedElem = e.target;
  if (!clikedElem.classList.contains("sidebarOpen") && !clikedElem.classList.contains("menu")) {
    nav.classList.remove("active");

  }
})

// click up 

let clickUp = document.querySelector(".clickUp");

window.onscroll = function() {
  if(scrollY < 330) {
    clickUp.style.opacity = "0"
  }else {
    
   clickUp.style.opacity = "1";
  }
}

clickUp.addEventListener("click", () => {
  if(scrollY > 100) {
    console.log("hi")
    
    // console.log("hi")
  }

  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})

// 

// ASO // ASO 
AOS.init({
    duration:1500
})

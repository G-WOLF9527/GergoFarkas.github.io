//initialize the 3rd party "action on scroll" library
AOS.init();
//get the project links
const webButton = document.querySelector(".webs");
const caloButton = document.querySelector(".calo");
const coffeeButton = document.querySelector(".cofl");
//get the buttons
const webp = document.querySelector(".webshop");
const calp = document.querySelector(".calorie");
const cofp = document.querySelector(".coffee");

//scroll event listener and a callback function for DOM manipulation
window.addEventListener("scroll", () => {
    //get the navbar and the nav elements
    const navbar = document.querySelector('.navbar');
    const navs = document.querySelector('.navContainer');
    //you have to be scrolling more than 40 px
    if(window.pageYOffset>=40){
        //fixed navbar
        navbar.style.position="fixed";
        //fixed navbar basicly dont have 100% width, so we set it
        navbar.style.width="100%";
    } else {
        //back to the original navbar and nav elements
        navbar.style.position="initial";
        navs.style.backdropFilter = "none";
    }
    //you have to scrolling more than 883 px
    if (window.pageYOffset>=883){
        //get the pic from the section 1 background
        navbar.style.backgroundImage="url(./src/home-bg.jpg)";
        //set the bottom of the pic in the navbar background
        navbar.style.backgroundPosition="bottom";
        //overlay everything
        navbar.style.zIndex="1";
        //background img blur
        navs.style.backdropFilter = "blur(10px)";
        //set the height of the navbar
        navbar.style.height = "6rem";
        //add some shadow
        navbar.style.boxShadow = "20px 0px 20px 5px gray";
    } else {
        //less than 883 px set it back
        navbar.style.backgroundImage="none";
        navs.style.backdropFilter = "none";
        navbar.style.boxShadow = "none";
    }
})

//show variable with an event function
const show = e => {
    //get the targeted link class name and do a switch statement for css
    switch(e.target.className){
        //if the class name webs than do some css
        case "webs":
            webButton.style.color="gray";
            webButton.style.backgroundColor="rgba(255, 255, 255, 0.76)";
            caloButton.style.color="rgba(255, 255, 255, 0.76)";
            caloButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            coffeeButton.style.color="rgba(255, 255, 255, 0.76)";
            coffeeButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            webp.style.display="grid";
            calp.style.display="none";
            cofp.style.display="none";
            break;
            //if the class name calo than do some css
        case "calo":
            webButton.style.color="rgba(255, 255, 255, 0.76)";
            webButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            caloButton.style.color="gray";
            caloButton.style.backgroundColor="rgba(255, 255, 255, 0.76)";
            coffeeButton.style.color="rgba(255, 255, 255, 0.76)";
            coffeeButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            webp.style.display="none";
            calp.style.display="grid";
            cofp.style.display="none";
            break;
            //if the class name cofl than do some css
        case "cofl":
            webButton.style.color="rgba(255, 255, 255, 0.76)";
            webButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            caloButton.style.color="rgba(255, 255, 255, 0.76)";
            caloButton.style.backgroundColor="rgba(128, 128, 128, 0.5)";
            coffeeButton.style.color="gray";
            coffeeButton.style.backgroundColor="rgba(255, 255, 255, 0.76)";
            webp.style.display="none";
            calp.style.display="none";
            cofp.style.display="grid";
            break;
    }
    e.preventDefault();
 };

//add event listener to the links
webButton.addEventListener("click", show);
caloButton.addEventListener("click", show);
coffeeButton.addEventListener("click", show);
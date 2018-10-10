/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////Target Dom elements with query selector////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
//If no matches are found, null is returned.
document.querySelector(".masthead")

//The Element method querySelectorAll() returns a static (not live)
//NodeList representing a list of the document's elements that match the specified group of selectors.
document.querySelectorAll("a")
document.querySelectorAll(".menu .has-children a")
document.querySelectorAll(".social-nav a[href='linkedin.com']")

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////Access and Change Elements////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//see full list of web elements below
//https://developer.mozilla.org/en-US/docs/Web/API/element
document.querySelector(".main-title").innerHTML
document.querySelector(".main-title").outerHTML
document.querySelector(".main-title").innerHTML = "School is closed tomorrow!"
document.querySelector("#showcase").id = "slideshow"

//notice how classList has property ReadOnly. Go to website below and search for classList
//https://developer.mozilla.org/en-US/docs/Web/API/element
document.querySelector(".masthead").classList
document.querySelector(".masthead").classList[1]


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////Access and Change Class///////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//classList can be accessed via 5 functions
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// document.querySelector(".masthead").classList.add("new-class")
// document.querySelector(".masthead").classList.remove("clear")
// document.querySelector(".masthead").classList
// document.querySelector(".masthead").classList[1]
// document.querySelector(".new-class").classList.toggle("masthead")
// document.querySelector(".new-class").classList.contains("masthead")



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////Access and Change Attributes//////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
const CTAELEMENT = document.querySelector(".cta a");

if(CTAELEMENT.hasAttribute("target")){
    console.log(CTAELEMENT.getAttribute("target"));
}else{
    CTAELEMENT.setAttribute("target", "_blank");
}

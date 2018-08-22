//href^means catch all href starting with expression.
//allowing us to catch both http and https links
//HTTPS = Hyper Text Transfer Protocol Secure
//It means all communications between your browser and the website are encrypted.
var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks);

for(var i=0; i<extLinks.length; i++){
  if(!extLinks[i].hasAttribute("target", "_blank"));
}

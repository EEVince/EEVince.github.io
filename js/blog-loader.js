console.log("Hi!");
function loadIntoEmbed()
{
	const srcData = "posts/" + window.location.hash.slice(1) + ".html";
	sessionStorage.setItem("post-src", srcData);
}
function generatePostEmbed()
{
	emb = document.createElement("embed");
	const srcData = sessionStorage.getItem("post-src");
	const postTxt = stylePost(srcData);//change style!
	postTxt.then() = {
	console.log(postTxt); 
	mainDiv = document.getElementsByClassName("main-content")[0];
	mainDiv.innerHTML = postTxt; };
}
async function stylePost(srcData) {
    const response = await fetch(srcData);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    
    const styleInject = "clear:both;"; // doc style code
    const mainTxt = doc.getElementById("txt-body");
    mainTxt.setAttribute("style", styleInject);
    console.log(mainTxt.getAttribute("style"));
    
    return doc.body.innerHTML;
}
loadIntoEmbed();
generatePostEmbed();
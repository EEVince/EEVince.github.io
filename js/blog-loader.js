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
	var postTxt = stylePost(srcData);//change style!
	console.log(postTxt); 
	mainDiv = document.getElementsByClassName("main-content")[0];
	mainDiv.innerHTML = postTxt.body;
}
function stylePost(srcData)
{
	fetch(srcData)
    .then(response => response.text())
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        // doc style code
		const styleInject = "clear:both;";
		const mainTxt = doc.getElementById("txt-body");
		mainTxt.setAttribute("style", styleInject);
		console.log(mainTxt.getAttribute("style"));
		return doc.documentElement.innerHTML; //convert back to html
	});
}
loadIntoEmbed();
generatePostEmbed();
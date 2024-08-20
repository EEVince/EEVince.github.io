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
	stylePost(srcData); //change style tag!
	emb.setAttribute("src", srcData);
	console.log(srcData + "\t attr:" + emb.getAttribute("src"));
	mainDiv = document.getElementsByClassName("main-content")[0];
	mainDiv.appendChild(emb); //add embed tag and so, DOM.
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
	});
}
loadIntoEmbed();
generatePostEmbed();
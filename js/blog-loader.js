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
	emb.setAttribute("src", srcData);
	console.log(srcData + "\t attr:" + emb.getAttribute("src"));
	stylePost(srcData);
	
	mainDiv = document.getElementsByClassName("main-content")[0];
	mainDiv.appendChild(emb);
}
function stylePost(srcData)
{
	fetch(srcData)
    .then(response => response.text())
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        // doc style code
		const styleInject = "clear:both; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;";
		const mainTxt = doc.getElementById("txt-body");
		mainTxt.setAttribute("style", styleInject);
		console.log(mainTxt.getAttribute("style"));
	});
}
loadIntoEmbed();
generatePostEmbed();
console.log("Hi!");
function loadIntoEmbed()
{
	const srcData = "posts/" + window.location.hash.slice(1) + ".html";
	localStorage.setItem("post-src", srcData);
}
function generatePostEmbed()
{
	emb = document.createElement("embed");
	const srcData = localStorage.getItem("post-src");
	emb.setAttribute("src", srcData);
	console.log(srcData + "\t attr:" + emb.getAttribute("src"));
	stylePost(srcData);
	
	mainDiv = document.getElementsByClassName("main-content")[0];
	mainDiv.appendChild(emb);
}
function stylePost(srcData)
{
	fetch('path/to/your/file.html')
    .then(response => response.text())
    .then(html => {
        // Create a new DOM parser
        let parser = new DOMParser();
        
        // Parse the text into a Document
        let doc = parser.parseFromString(html, 'text/html');
        
        // Now you can manipulate the `doc` as a DOM object
        console.log(doc);
	});
}
loadIntoEmbed();
generatePostEmbed();
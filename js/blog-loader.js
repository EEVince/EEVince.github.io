console.log("Hi!");
function loadIntoEmbed()
{
	const srcData = "posts/" + window.location.hash.slice(1) + ".html";
	console.log(srcData);
	document.getElementsByTagName("IFRAME")[0].setAttribute("src", srcData);
}

function appendStyle()
{
	var emb = document.getElementsByTagName("iframe")[0];
	var embedDoc = emb.contentDocument;
	// create a new div element
    const newStyle = embedDoc.createElement("style");

    // and give it some content
    const newContent = embedDoc.createTextNode("white-space: initial; overflow: initial; text-overflow: initial;");

    // add the text node to the newly created div
    newStyle.appendChild(newContent);

    // add the newly created element and its content into the DOM
    embedDoc.head.appendChild(newStyle);
	console.log("stylish!");
}
loadIntoEmbed();
appendStyle();
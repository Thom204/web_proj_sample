
/*Name this external file gallery.js*/

function upDate(previewPic){
    var d = document.querySelector("#image");
    d.style.backgroundImage = "url("+previewPic.src+")";
    d.innerHTML = previewPic.alt;
	}

function unDo(){
    var d = document.querySelector("#image");
		d.style.backgroundImage = "url('')";
    d.innerHTML = "Hover over an image below to display here.";
	}
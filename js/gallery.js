
/*Name this external file gallery.js*/

function upDate(previewPic){
    var d = document.querySelector("#image");
    d.style.backgroundImage = "url("+previewPic.src+")";
    d.innerHTML = previewPic.alt;
}

function blUpdate(previewPic) {
    previewPic.style.border = "5px solid aquamarine"
    upDate(previewPic)
}

function blUnDo(previewPic) {
    previewPic.style.border = "10px solid black"
    unDo()
}

function unDo(){
    var d = document.querySelector("#image");
	d.style.backgroundImage = "url('')";
    d.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    var n = 1
    for (const img of document.querySelectorAll(".preview")) {
        img.tabIndex = n
        n++
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".preview").forEach(img => {
        img.onmouseover = () => upDate(img)
        img.onfocus = () => blUpdate(img)
        img.onblur = () => blUnDo(img)
        img.onmouseout = unDo
    })

    addTabIndex()
    console.log("tabfocus added")
})
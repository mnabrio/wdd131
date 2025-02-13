const menuButton = document.querySelector("#menuButton");


function hideMenu(){
    const menu = document.querySelector("#menu");
    menu.classList.toggle('hide');    
}

function handleResize(){
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000){
        menu.classList.remove('hide');
    }
    else {
        
        menu.classList.add('hide');
    }

}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img class="img-viewer" src="${pic}" alt="${alt}">
    </div>`;
  }

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedImg = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const imgSrc = clickedImg.src;
    const imgParts = imgSrc.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const bigImg = imgParts[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewer = viewerTemplate(bigImg, "full size image");
    document.body.insertAdjacentHTML("afterbegin", viewer);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer(){
    document.querySelector(".viewer").remove();
}

menuButton.addEventListener("click", hideMenu);

handleResize();
window.addEventListener("resize", handleResize);

document.querySelector(".gallery").addEventListener("click", viewHandler);
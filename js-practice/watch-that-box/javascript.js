
function btnGrowClick(box) {
    box.style.height = "300px";
    box.style.width = "300px";
}
function btnBlueClick(box) {
    box.style.backgroundColor="blue";
}
function btnFadeClick(box) {
    box.style.opacity = "0.3";
    
}
function btnShadowClick(box) {
    box.style.boxShadow = "10px 20px 30px green";
    
}
function btnResizeClick(box) {
    box.style.resize = "both";
    box.style.overflow = "auto";
    box.innerHTML = "click right bottom to drag";
    
}
function btnResetClick(box) {
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.opacity = "1";
    box.style.boxShadow = "none";
    box.style.resize = "none";
    box.style.backgroundColor="orange";   
    box.innerHTML = "";
    box.style.overflow = "none"; 
}



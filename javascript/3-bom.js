'use-strict'

// BOM (Browser Object Model)

function getBom(){
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location)
}

function redirect(url) { 
    window.location.href = url;
}

function openWindows(url) {
    window.open(url,"","height=400, width=400");
}

getBom();
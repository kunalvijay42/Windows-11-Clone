let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    // console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"                 //For hidding the start menu image PS : Done by adjusting manually
    }
    else {
        startmenu.style.bottom = "50px"
    }
})

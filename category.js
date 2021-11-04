///get element from html file 
const enter_btn = document.querySelector(".btn .btn1");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .continue");

//if exit Button Clicked show hide 
//exit_btn.onclick=()=>{
    //info_box.classList.remove("activeInfo");
    
//}



exit_btn.addEventListener("click",()=>{
    info_box.classList.remove("activeInfo");
})

enter_btn.addEventListener("click",()=>{
    info_box.classList.add("activeInfo");
})

continue_btn.addEventListener("click",()=>{
    location="/pages/moviegame.html";
})


//if start Button Clicked  show
//start_btn.onclick=()=>{
   // info_box.classList.add("activeInfo");
    
//}

//if continue Button Clicked  show
//continue_btn.onclick=()=>{
    //location="game.html/";
    
//}
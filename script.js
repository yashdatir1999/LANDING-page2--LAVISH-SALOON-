var btn= document.querySelector(".menu-icon")
var hidenav= document.querySelector(".nav-bar")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){   
        hidenav.style.right="5%"
        btn.innerHTML=(`<i class="ri-close-fill"></i>`)
        flag=1
    }else{
        hidenav.style.right="-80%"
        btn.innerHTML=(`<i class="ri-menu-add-line"></i>`)
        flag=0
    }


})
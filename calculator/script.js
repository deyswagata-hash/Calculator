const display=document.querySelector("#display");
const buttons=document.querySelectorAll("button");
buttons.forEach(item=>{
    item.onclick=()=>{//runs a function everytime a btn clicked and also  we check what kuind of button we clicked
           if (item.id=="clear"){//clear the display
            display.innerText="";
           }else if(item.id=="backspace"){//backspace logic to remove the last charecter
            let string=display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
           }else if (display.innerText!=""&& item.id=="equal"){
            display.innerText=eval(display.innerText);
           }else if(display.innerText==""&& item.id=="equal"){
            display.innerText="Empty!";
            setTimeout(()=>(display.innerText=""),2000);
           }else{
            display.innerText+=item.id;
           }
    };

});

// const themeToggler=document.querySelector(".theme-toggler");
// const calculator=document.querySelector(".calculator");
// const toggleIcon=document.querySelector(".toggle-icon");

// let isDark=true;
// themeToggleBtn.onclick=()=>{
//     calculator.classList.toggle("dark");
//     themeToggleBtn.classList.toggle("active");
//     isDark=!isDark;
// };
let themeToggler=document.querySelector("#mode");
let currentmode="light";
modebtn.addEventListener("click",()=>{
    if (currentmode==="light"){
        currentmode="dark";
        document.querySelector("body").style.backgroundColor="black";

    }else{
        currentmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
});



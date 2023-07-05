let btn=document.querySelectorAll(".btn");

let rem1=document.querySelector(".abttxt");
let rem2=document.querySelector(".pavskills");
let rem3=document.querySelector(".pavimg");


let cancel=document.querySelectorAll(".cancel");

// function remove(txt)
// {
//     btn[i].addEventListener("click",()=>{

//     })
// }

for(let i=0;i<btn.length;i++)
{
    btn[0].addEventListener("click",()=>{
        rem1.classList.remove("abttxt");
    })
    btn[1].addEventListener("click",()=>{
        rem2.classList.remove("pavskills");
    })
    btn[2].addEventListener("click",()=>{
        rem3.classList.remove("pavimg");
    })
}

for(let i=0;i<cancel.length;i++)
{
    cancel[0].addEventListener("click",()=>{
        rem1.classList.add("abttxt");
    })
    cancel[1].addEventListener("click",()=>{
        rem2.classList.add("pavskills");
    })
    cancel[2].addEventListener("click",()=>{
        rem3.classList.add("pavimg");
    })
}

    document.addEventListener("keydown",(evt)=>{
        if(evt.key=="Escape")
        {
            rem1.classList.add("abttxt");
        }
        if(evt.key=="Escape")
        {
            rem2.classList.add("pavskills");
        }
        if(evt.key=="Escape")
        {
            rem3.classList.add("pavimg");
        }
    })



const btn=document.getElementById('hbtn');
const box=document.getElementsByClassName('box')[0];

btn.addEventListener('click',()=>{
    if(box.style.display=="none"){
        box.style.display="flex";
    }
    else{
        box.style.display="none";
    }
})

var typed=new Typed('#typ',{
    strings:["Career",
        "Dream Job",
        "Future",
        "Skills",
        "Success"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
})


const fil=document.querySelectorAll('.fts');
const boxes=document.querySelectorAll('.jobbox')
fil.forEach(filter=>{
    filter.addEventListener('click',()=>{
        const getId=filter.id;
        boxes.forEach(box =>{
            const boxid=box.id
            if(getId=='rj' || getId==boxid){
                box.style.display="flex";
            }
            else{
                box.style.display="none";
            }
        })
        
    })
})






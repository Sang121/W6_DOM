
btn.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})
btn.addEventListener('mouseup',(e)=>{
    let msg=document.querySelector("#message")
    switch (e.button){
        case 0:
            msg.textContent='LeftMouse clicked';
            break;
        case 1:
            msg.textContent='middle mouse clicked'
            break
        case 2:
            msg.textContent='Right mouse click'
    }
})

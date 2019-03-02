
function getEvent(event){
    var key = event.which;
    var min = document.querySelectorAll("audio")
    var maj = document.querySelectorAll(".key")
    var rep;
    for(let i=0; i<min.length; i++){
        if(min[i].getAttribute("data-key")==key || maj[i].getAttribute("data-key")==key){
            min[i].play() 
            changeStyle(maj[i])
        break;
        }
        else{
        rep = false
        }
    }
}
function changeStyle(element){
    element.classList.add("change")
    function changeStyle2(){
        element.classList.remove("change")
    }
    setTimeout(changeStyle2, 100);
}




